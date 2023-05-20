import { handleToast } from './toast-helper'
import './toast.css'

export default function Toast({ message='...' }) {

    return <>
        <button onclick={handleToast}>Show Toast</button>
        <div id="snackbar">{message}</div>
    </>
}