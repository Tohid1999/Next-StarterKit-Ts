export const isEmpty = (obj: any) => {
    if (obj === null || obj === '' || obj === undefined) return true;
    if (!Object.entries(obj).length) return true;
    return false;
};

export const commafy = (number: number, delimiterChar = ','): string => {
    let _number = number.toString();
    _number = _number.split(delimiterChar).join('');
    if (isNaN(number)) {
        return number.toString();
    }
    const str = number.toString().split('.');
    if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1' + delimiterChar);
    }
    if (str[1] && str[1].length >= 4) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
};

export const isServer = () => typeof window === 'undefined';

export const getTextOfParagraph = (html: string): string => {
    if (isServer) return html;

    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent || div.innerText || '';
    return text;
};

// Convert numbers or strings to pixel value
// Helpful for styled-jsx when using a prop
// height: ${toPixels(height)}; (supports height={20} and height="20px")
export const toPixels = (value: string | number) => {
    if (typeof value === 'number') {
        return `${value}px`;
    }

    return value;
};
