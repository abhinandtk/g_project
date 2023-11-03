import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '~/store/store';
import DefaultLayout from '~/components/layouts/DefaultLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '~/scss/style.scss';
import '~/scss/style.scss';
import '~/scss/home-default.scss';
import '~/scss/market-place-1.scss';
import '~/scss/market-place-2.scss';
import '~/scss/market-place-3.scss';
import '~/scss/market-place-4.scss';
import '~/scss/electronic.scss';
import '~/scss/furniture.scss';
import '~/scss/organic.scss';
import '~/scss/technology.scss';
import '~/scss/autopart.scss';
import '~/scss/electronic.scss';
import 'nprogress/nprogress.css';
import '../public/static/nprogress.css';
import '~/scss/custom.scss';
import nProgress from 'nprogress';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
// import { SessionProvider } from 'next-auth/react';

nProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function Loading() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => url !== router.asPath && setLoading(true);
        const handleComplete = (url) =>
            url === router.asPath && setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    });

    return (
        loading && (
            <div
                className="spinner-wrapper"
                style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'blue',
                }}>
                <div
                    className="spinner"
                    style={{ width: '50px', height: '50px' }}></div>
            </div>
        )
    );
}

class MyApp extends App {
    constructor(props) {
        super(props);
        this.persistor = persistStore(props.store);
    }

    componentDidMount() {
        setTimeout(function () {
            document.getElementById('__next').classList.add('loaded');
        }, 100);

        this.setState({ open: true });
    }

    render() {
        const { Component, pageProps, store } = this.props;
        const getLayout =
            Component.getLayout ||
            ((page) => <DefaultLayout>{page}</DefaultLayout>);
        return getLayout(
            <Provider store={store}>
                <PersistGate
                    loading={<Component {...pageProps} />}
                    persistor={this.persistor}>
                    {/* <Loading /> */}
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        );
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
