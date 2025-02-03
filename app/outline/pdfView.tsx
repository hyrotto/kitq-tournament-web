"use client";
import React from "react";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { ScrollMode } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker, Viewer, LocalizationMap } from '@react-pdf-viewer/core';
import jp_JP from '@react-pdf-viewer/locales/lib/jp_JP.json';
import styles from './pdfView.module.css';
function PDFviewer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    
    return(
        <div className={styles.nogooglefont}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                <Viewer
                    fileUrl="/King&Queen杯_企画書.pdf"
                    plugins={[defaultLayoutPluginInstance]}
                    localization={jp_JP as unknown as LocalizationMap}
                />
            </Worker>
        </div>
    )
}

export default PDFviewer;