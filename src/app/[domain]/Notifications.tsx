'use client'

import {useEffect} from "react";
import {Capacitor} from "@capacitor/core";
import {addListeners, registerNotifications} from "../../../notifications";

const Notifications = () => {
    useEffect(() => {
        if (Capacitor.getPlatform() !== 'web') {
            registerNotifications().then(() => {
                addListeners()
            })
        }
    }, [])

    return (
        <div>Some client component</div>
    )
}

export default Notifications
