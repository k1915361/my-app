import * as faceapi from 'face-api.js';
import * as canvas from 'canvas';
import { onMount } from 'solid-js';

export default function FaceAPIDemo() {
    const { Canvas, Image, ImageData } = canvas;
    faceapi.env.monkeyPatch({
        Canvas: HTMLCanvasElement,
        Image: HTMLImageElement,
        ImageData: ImageData,
        Video: HTMLVideoElement,
        createCanvasElement: () => document.createElement('canvas'),
        createImageElement: () => document.createElement('img')
    })
    let input: HTMLImageElement
    let canvasE: HTMLCanvasElement
    let ssdMobilenetv1Net = new faceapi.SsdMobilenetv1;
    let faceLandmarkNet = new faceapi.FaceLandmarkNet;
    let faceExpressionNet = new faceapi.FaceExpressionNet;      
    let ageGenderNet = new faceapi.AgeGenderNet;
    let faceDetectionNet = new faceapi.FaceDetectionNet;
    let faceDetectNet = new faceapi.TinyFaceDetector;
    const MODEL_URL = 'library/model'
    
    console.log(faceapi.nets)
    const detectFace = async () => {
        await faceapi.loadSsdMobilenetv1Model('./library/model/ssd_mobilenetv1_model-shard1')
        await faceapi.loadFaceLandmarkModel('library/model/face_landmark_68_model-shard1')
        await faceapi.loadFaceRecognitionModel('library/model/face_recognition_model-shard1')
        await faceapi.loadFaceExpressionModel('library/model/face_expression_model-shard1')

        let result = await faceapi
            .detectSingleFace(input, new faceapi.SsdMobilenetv1Options())
            .withFaceLandmarks()
            .withFaceExpressions()
            .withAgeAndGender()      

        const displaySize = { width: input.width, height: input.height }
        faceapi.matchDimensions(canvasE, displaySize)

        const detectionsWithLandmarksForSize = faceapi.resizeResults(result, { width: input.width, height: input.height })
        canvasE.width = input.width
        canvasE.height = input.height
        // faceapi.drawLandmarks(canvasE, result, { drawLines: true })
        
        // const boxesWithText = [
        //     new faceapi.BoxWithText(new faceapi.Rect(0, 0, 50, 50), 'some text')
        // ];
        // faceapi.drawDetection(canvas, boxesWithText);
    }
    onMount(async () => {
        input = document.getElementById('myImg')
        canvasE = document.getElementById('overlay')
        detectFace();
    })

    return (
        <div>
            <img id="myImg" src="library/image/face/1.jpg" loading='lazy' />
            <canvas id="overlay" />
            <video
                id="myVideo"
                src="library/image/face/pexels-fauxels-3249935.mp4"
                style={{ width: '100%' }}
            />
            <canvas id="myCanvas" />
        </div>
    )
}