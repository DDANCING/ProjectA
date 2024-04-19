import React, { useEffect } from 'react';
import { OpenSheetMusicDisplay as OSMD } from 'opensheetmusicdisplay';

interface GuitarTabProps {
    musicXml: string;
}

const GuitarTabComponent: React.FC<GuitarTabProps> = ({ musicXml }) => {
    useEffect(() => {
        const osmd = new OSMD('osmdContainer');
        osmd.load(musicXml).then(() => {
            const div = document.getElementById('osmdContainer');
            if (div) {
                div.innerHTML = ''; // Clear previous content
                osmd.render();
            }
        }).catch((error) => {
            console.error('Error loading musicXML:', error);
        });

        return () => {
            // Clean up OpenSheetMusicDisplay instance when component unmounts
            osmd.clear();
        };
    }, [musicXml]);

    return <div id="osmdContainer"></div>;
};

export default GuitarTabComponent;
