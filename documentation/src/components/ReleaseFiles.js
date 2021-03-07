//https://api.github.com/repos/netmedianer-GmbH/treasure-hunt/releases
import React, { useEffect, useState } from 'react';

const ReleaseFiles = () => {
    const [releases, setReleases] = useState({});

    useEffect(() => {
        fetch("https://api.github.com/repos/netmedianer-GmbH/treasure-hunt/releases")
            .then(response => response.json())
            .then(data => setReleases(data));

        return () => {
            // Clean up the subscription
        };
    }, []);

    return (
        <div className="pt-12 px-10 lg:px-24 text-left">
            <h2 className="text-2xl my-4">Download the latest release files from here</h2>
            <h3 className="text-xl my-4">The Microsoft Excel Files</h3>
            {
                releases[0]?.assets.map(asset =>
                    asset.content_type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    && <div><a href={asset.browser_download_url}>{asset.name}</a></div>)
            }
            <h3 className="text-xl my-4">The PowerApps Canvas App Import File</h3>
            {
                releases[0]?.assets.map(asset =>
                    asset.content_type === "application/zip"
                    && <div><a href={asset.browser_download_url}>{asset.name}</a></div>)
            }
        </div>
    )
};

export default ReleaseFiles;