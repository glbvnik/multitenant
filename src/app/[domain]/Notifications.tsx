'use client'

import {useEffect} from "react";
import {Capacitor} from "@capacitor/core";
import {addListeners, registerNotifications} from "../../../notifications";

const Notifications = () => {
    useEffect(() => {
        (async () => {
            if (Capacitor.getPlatform() !== 'web') {
                await registerNotifications()
                await addListeners()
            }
        })()
    }, [])

    return (
        <div>Some client component...</div>
    )
}

export default Notifications
