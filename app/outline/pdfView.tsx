"use client";
import React from "react";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';

function PDFviewer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return(
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
            <Viewer
                fileUrl="/King&Queen杯_企画書.pdf"
                plugins={[defaultLayoutPluginInstance]}
            />
        </Worker>
    )
}

export default PDFviewer;