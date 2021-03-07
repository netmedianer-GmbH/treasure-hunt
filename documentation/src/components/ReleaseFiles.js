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
            <p className="mt-2 text-lg font-light leading-relaxed">
                Instead of downloading the installation files from our Github page, you can also download the latest release directly from here.
            </p>

            <h3 className="text-xl my-4">The Microsoft Excel Files</h3>
            <ul className="list-disc text-lg pl-6 py-4">
            {
                releases[0]?.assets.map(asset =>
                    asset.content_type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    && <li><a href={asset.browser_download_url}>{asset.name}</a></li>)
            }
            </ul>

            <h3 className="text-xl my-4">The PowerApps Canvas App Import File</h3>
            <ul className="list-disc text-lg pl-6 py-4">
            {
                releases[0]?.assets.map(asset =>
                    asset.content_type === "application/zip"
                    && <li><a href={asset.browser_download_url}>{asset.name}</a></li>)
            }
            </ul>
        </div>
    )
};

export default ReleaseFiles;