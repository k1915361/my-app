import * as faceapi from 'face-api.js';

export const SSD_MOBILENETV1 = 'ssd_mobilenetv1'
export const TINY_FACE_DETECTOR = 'tiny_face_detector'
let selectedFaceDetector = SSD_MOBILENETV1
let minConfidence = 0.5

// tiny_face_detector options
let inputSize = 512
let scoreThreshold = 0.5

export const getEl = (id) => document.getElementById(id)

export function getFaceDetectorOptions() {
    return selectedFaceDetector === SSD_MOBILENETV1
        ? new faceapi.SsdMobilenetv1Options({ minConfidence })
        : new faceapi.TinyFaceDetectorOptions({ inputSize, scoreThreshold })
}

export function getCurrentFaceDetectionNet() {
    if (selectedFaceDetector === SSD_MOBILENETV1) {
        return faceapi.nets.ssdMobilenetv1
    }
    if (selectedFaceDetector === TINY_FACE_DETECTOR) {
        return faceapi.nets.tinyFaceDetector
    }
}

export function isFaceDetectionModelLoaded() {
    return !!getCurrentFaceDetectionNet().params
}