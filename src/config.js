export default {
    // oidc: {
    //     issuer: 'https://dev-93813304.okta.com/oauth2/default',
    //     clientId: '0oaa0bcax1x0bYmaO5d7',
    //     scopes: ['openid', 'profile', 'email'],
    //     redirectUri: `${window.location.origin}/login/callback`,
    //     useInteractionCodeFlow: false,
    //     useClassicEngine: true,
    // },
    // widget: {
    //     issuer: 'https://dev-93813304.okta.com/oauth2/default',
    //     clientId: '0oaa0bcax1x0bYmaO5d7',
    //     redirectUri: `${window.location.origin}/login/callback`,
    //     scopes: ['openid', 'profile', 'email'],
    //     useInteractionCodeFlow: false,
    //     useClassicEngine: true,
    // }
    oidc: {
        issuer: 'https://dev-53337669.okta.com/oauth2/default',
        clientId: '0oaah5w3v77vx6zk35d7',
        scopes: ['openid', 'profile', 'email'],
        redirectUri: `${window.location.origin}/login/callback`,
        useInteractionCodeFlow: false,
        useClassicEngine: true,
    },
    widget: {
        issuer: 'https://dev-53337669.okta.com/oauth2/default',
        clientId: '0oaah5w3v77vx6zk35d7',
        redirectUri: `${window.location.origin}/login/callback`,
        scopes: ['openid', 'profile', 'email'],
        useInteractionCodeFlow: false,
        useClassicEngine: true,
    }
};