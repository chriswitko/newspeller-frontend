// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors'
import ReactGA from 'react-ga'
import { browserHistory } from 'react-router'

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err) // eslint-disable-line no-console
}

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default)
}

const requireAuth = (nextState, replace) => {
  const loggedIn = window.localStorage.getItem('token')

  if (loggedIn) {
    if (nextState.location.pathname === '/') {
      browserHistory.push('/home')
    }
  } else {
    if (nextState.location.pathname === '/register' && !nextState.location.query.token) {
      browserHistory.push('/')
    } else if (nextState.location.pathname === '/register' && nextState.location.query.token) {
    } else if (nextState.location.pathname !== '/') {
      browserHistory.push('/signin')
    }
  }
}

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export default function createRoutes (store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store)
  ReactGA.initialize('UA-93665231-1')

  return [
    {
      path: '/',
      name: 'index',
      onEnter: requireAuth,
      getComponent (nextState, cb) {
        logPageView()
        // verifyAuthedUserRedirectHome()

        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/App/sagas'),
          import('containers/IndexPage')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default)
          injectSagas(sagas.default)

          renderRoute(component)
        })
      }
    }, {
      path: '/terms',
      name: 'terms',
      getComponent (nextState, cb) {
        logPageView()
        import('containers/TermsPage')
          .then(loadModule(cb))
          .catch(errorLoading)
      }
    }, {
      path: '/privacy',
      name: 'privacy',
      getComponent (nextState, cb) {
        logPageView()
        import('containers/PrivacyPolicyPage')
          .then(loadModule(cb))
          .catch(errorLoading)
      }
    }, {
      path: '/home',
      name: 'home',
      onEnter: requireAuth,
      getComponent (nextState, cb) {
        logPageView()
        // verifyAuthedUser()

        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/App/sagas'),
          import('containers/HomePage')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default)
          injectSagas(sagas.default)

          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    }, {
      path: '/settings',
      name: 'settings',
      onEnter: requireAuth,
      getComponent (nextState, cb) {
        logPageView()
        // verifyAuthedUserRedirect()

        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/App/sagas'),
          import('containers/SettingsPage')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default)
          injectSagas(sagas.default)

          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    }, {
      path: '/channels',
      name: 'channels',
      onEnter: requireAuth,
      getComponent (nextState, cb) {
        logPageView()
        // verifyAuthedUserRedirect()

        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/App/sagas'),
          import('containers/ChannelsPage')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default)
          injectSagas(sagas.default)

          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    }, {
      path: '/signin',
      name: 'signin',
      getComponent (nextState, cb) {
        logPageView()

        const importModules = Promise.all([
          import('containers/SignInPage/reducer'),
          import('containers/SignInPage/sagas'), // replace to local saga
          import('containers/SignInPage')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('signin', reducer.default) // signin?
          injectSagas(sagas.default)

          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    }, {
      path: '/password',
      name: 'password',
      getComponent (nextState, cb) {
        logPageView()

        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/App/sagas'),
          import('containers/PasswordPage')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default)
          injectSagas(sagas.default)

          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    }, {
      path: '/register',
      name: 'register',
      onEnter: requireAuth,
      getComponent (nextState, cb) {
        logPageView()
        // verifyAuthedUser()

        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/RegisterPage')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default)
          injectSagas(sagas.default)

          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    }, {
      path: '/thankyou',
      name: 'thankyou',
      getComponent (nextState, cb) {
        logPageView()

        import('containers/ThankYouPage')
          .then(loadModule(cb))
          .catch(errorLoading)
      }
    }, {
      path: '/unsubscribed',
      name: 'unsubscribed',
      getComponent (nextState, cb) {
        logPageView()

        import('containers/UnsubscribedPage')
          .then(loadModule(cb))
          .catch(errorLoading)
      }
    }, {
      path: '/news-publishers',
      name: 'newspublishers',
      getComponent (nextState, cb) {
        logPageView()

        import('containers/NewsPublishersPage')
          .then(loadModule(cb))
          .catch(errorLoading)
      }
    }, {
      path: '*',
      name: 'notfound',
      getComponent (nextState, cb) {
        logPageView()

        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading)
      }
    }
  ]
}
