module.exports = {
    upload: {
        config: {
            provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
            providerOptions: {
                bucketName: 'rocsites-assets',
                publicFiles: true,
                uniform: false,
                basePath: 'uploads-blue-rock',
            },
        },
    },
    'import-export-entries': {
        enabled: true,
        config: {
            serverPublicHostname: "https://blue-rock-2-582887419943.us-east1.run.app"
        }
    }
}