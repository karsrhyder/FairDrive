import PutioAPI from '@putdotio/api-client';

export default async function getDirectoryList({ dirId }) {
    console.log(localStorage.getItem('putiotoken'));
    console.log({ dirId });
    window.putApi = new PutioAPI({
        clientID: '4051',
        token: localStorage.getItem('putiotoken'),
    });

    const Api = await window.putApi;

    //         Api
    //             .User
    //             .Info()
    //             .then(res => console.log('Res: ', res.data.info)
    //                 .catch(err => console.log('Error occured while fetching user info: ', err))
    const directoryList = await
        Api
            .Files
            .Query(dirId, {});


    // treat data HERE!!

    return directoryList.data.files

}