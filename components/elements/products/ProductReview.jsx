import Axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import apis from '~/public/static/data/my-constants/Api';
import constants from '~/public/static/data/my-constants/Constants';
import { showNotification } from '~/utilities/common-helpers';
import AddReview from './AddReview';
import ViewReview from './ViewReview';

function ProductReview({ slug_id, hideReviewModal,language }) {
    const [isReviewed, setIsReviewed] = useState(false);
    const [rating, setRating] = useState(null);
    const [title, setTitle] = useState(null);
    const [reviewId,setReviewId] = useState(null)
    const [description, setDescription] = useState(null)
    const router = useRouter();
    const { id } = router.query;
    // const language = useLanguageHook();

 
    const getReview = () => {
        Axios.post(apis.viewReview, {
            session_id: constants['sessionId'],
            language:    language,
            productSlugId: slug_id,
            OrderId:id
        })
            .then((res) => {
                if (res.data.status === 1 && res.data.data.length !== 0) {
                  
                    
                    setRating(res.data.data[0].rating);
                    setTitle(res.data.data[0].title);
                    setDescription(res.data.data[0].description);
                    setReviewId(res.data.data[0].id)
                    setIsReviewed(true);
                }
            })
            .catch((err) => {
                showNotification(
                    language,
                    constants.Error
                   );
            });
    };

    const addReview = () => {
        Axios.post(apis.addReview, {
            session_id: constants['sessionId'],
            language:language,
            rating,
            title,
            description,
            productSlugId: slug_id,
            OrderId:id
        })
            .then((res) => {
                if (res.data.status === 1) {
                    showNotification(language,constants.Success, res.data.message);
                    hideReviewModal(false);
                    setIsReviewed(true);
                }
            })
            .catch((err) => {
                showNotification(
                    language,
                    constants.Error
                   );
            });
    };

    const removeReview = (removeId)=>{
        Axios.post(apis.removeReview, {
            session_id: constants['sessionId'],
            language: language,
            productSlugId: slug_id,
            review_id:removeId

        })
            .then((res) => {
                if (res.data.status === 1) {
                    showNotification(language,constants.Success, res.data.message,);
                    
                    hideReviewModal(false);
                    setIsReviewed(false);
                    
                }
            })
            .catch((err) => {
                showNotification(language,
                    constants.Error
                   );
            });
    }

    useEffect(() => {
        getReview();
    }, []);

    return language !== false &&  !isReviewed ? (
        <AddReview
            addReview={addReview}
            setRating={setRating}
            setTitle={setTitle}
            setDescription={setDescription}
            language={language}
        />
        
    ) : (
        <ViewReview language={language} reviewId={reviewId} rating={rating} title={title} description={description} removeReview={removeReview}/>
    );
}

export default ProductReview;
