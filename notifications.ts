import {PushNotifications} from '@capacitor/push-notifications';
import Router from 'next/router'

export const addListeners = async () => {
    await PushNotifications.addListener('registration', async token => {
        console.log('Registration token: ', token.value);

        await PushNotifications.createChannel({
            id: 'high_importance_channel',
            name: 'High Importance Channel',
            importance: 4,
        })
    });

    await PushNotifications.addListener('registrationError', err => {
        console.error('Registration error: ', err.error);
    });

    await PushNotifications.addListener('pushNotificationReceived', async notification => {
        console.log('Push notification received: ', notification);

        await PushNotifications.createChannel({
            id: 'high_importance_channel',
            name: 'High Importance Channel',
            importance: 4,
        })
    });

    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
        console.log('Push notification action performed', notification.actionId, notification.inputValue);

        const data = notification.notification.data

        console.log('Data', data)
        console.log('Details:', data.detailsId)

        if (data.detailsId) {
            console.log('Router:', Router)
            Router.push('/data')
        }
    });
}

export const registerNotifications = async () => {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === 'prompt') {
        permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted') {
        throw new Error('User denied permissions!');
    }

    await PushNotifications.register();
}

const getDeliveredNotifications = async () => {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    console.log('delivered notifications', notificationList);
}
