const dataBrowser = [
    {
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    },
    { 	string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    },
    {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
    },
    {
        prop: window.opera,
        identity: "Opera"
    },
    {
        string: navigator.vendor,
        subString: "iCab",
        identity: "iCab"
    },
    {
        string: navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
    },
    {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    },
    {
        string: navigator.vendor,
        subString: "Camino",
        identity: "Camino"
    },
    {	
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
    },
    {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
    },
    {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
    },
    { 	
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
    }
];

const dataOS = [
    {
        string: navigator.platform,
        subString: "Win",
        identity: "Windows"
    },
    {
        string: navigator.platform,
        subString: "Mac",
        identity: "Mac"
    },
    {
        string: navigator.userAgent,
        subString: "iPhone",
        identity: "iPhone/iPod"
    },
    {
        string: navigator.userAgent,
        subString: "iPad",
        identity: "iPad"
    },
    {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux"
    }
];

function detectBrowser() {
	const browser = searchString(dataBrowser) || "An unknown browser";
    const OS = searchString(dataOS) || "an unknown OS";
    return { browser, OS };
}

function searchString (data) {
    for (var i=0;i<data.length;i++)	{
        var dataString = data[i].string;
        var dataProp = data[i].prop;
        if (dataString) {
            if (dataString.indexOf(data[i].subString) != -1)
                return data[i].identity;
        }
        else if (dataProp)
            return data[i].identity;
    }
}
