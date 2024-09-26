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
}