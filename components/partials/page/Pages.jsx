import React from 'react'

function Pages({from}) {

    let pageHeading,pageBody;

    if (from === 'return') {
        pageHeading = "Return Page"
        pageBody = "abcsfd"
    }

    return (
    <div className="ps-section--custom">
    <div className="container">
        <div className="ps-section__header">
            <h1 className='page-heading__pages'>{from}</h1>
        </div>
        <div className="ps-section__content">
            <h3>{pageHeading}</h3>
            <p>
                {pageBody}
            </p>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui
            </p>
            <h4>He quick, brown fox jumps over a lazy dog.</h4>
            <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin.
                He lay on his armour-like back, and if he lifted his head a
                little he could see his brown belly, slightly domed and
                divided by arches into stiff sections. The
            </p>
            <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my
                whole heart. I am alone, and feel the charm of existence in
                this spot, which was created for the bliss of souls like
                mine. I am so happy, my dear friend, so absorbed in the
                exquisite sense of mere tranquil existence, that I neglect
                my talents. I should be incapable of drawing a single stroke
                at the present moment; and yet I feel that I never was a
                greater artist than now. When, while the lovely valley teems
                with
            </p>
        </div>
    </div>
</div>
  )
}

export default Pages