class ConnHelper {
    static getTime(date: string): string {
        let toTwoDigits = (value: number) => {
            let retVal = "" + value;
            return (retVal.length > 1 ? "" : "0") + value;
        }

        let d = new Date(date);
        return "" + toTwoDigits(d.getHours()) + ":" + toTwoDigits(d.getMinutes());
    }

    static getPlatformIcon(platform: string): string {
        if (platform === null || platform === "null" || platform === "undefined") {
            return " fa-bus-alt";
        } else {
            return " fa-train";
        }
    }

    static getPlatformText(platform: string): string {
        if (platform === null || platform === "null" || platform === "undefined") {
            return "";
        } else {
            return "  " + platform + "  ";
        }
    }
}

export default ConnHelper