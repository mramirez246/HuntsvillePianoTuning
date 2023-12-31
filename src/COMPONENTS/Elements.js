import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BsChevronDown } from 'react-icons/bs'
import { c_mainURL } from "../Constants";


export const Box = ({ width, height, radius, backgroundColor, paddingV, paddingH, classes, children }) => {
    return (
        <div className={`${classes}`} style={{ width: `${width}`, height: `${height}`, padding: `${paddingV} ${paddingH}`, borderRadius: `${radius}`, backgroundColor: `${backgroundColor}` }}>
            {children}
        </div>
    )
}

export const Image = ({ src, alt, radius, classes }) => {
    return (
        <img src={src} className={`${classes}`} alt={alt} style={{ borderRadius: `${radius}`, width: "100%", height: "100%" }} loading = "lazy" />
    );
};

export const Button = ({ color, backgroundColor, radius, func, classes, children }) => {
    return (
        <div className={`${classes}`} style={{ cursor: "pointer", color: `${color}`, backgroundColor: `${backgroundColor}`, borderRadius: `${radius}` }} onClick={func}>{children}</div>
    );
};

export const Text = ({ text, fontSize, weight, color, spacing, lineHeight, classes }) => {
    return (
        <p className={`${classes}`} style={{ fontSize: `${fontSize}`, fontWeight: `${weight}`, width: "100%", letterSpacing: `${spacing}`, lineHeight: `${lineHeight}`, color: `${color}` }}>
            {text.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </p>
    )
}

export const TextField = ({ placeholder, fontSize, radius, padding, id, classes }) => {
    return (
        <input className={`remove-app ${classes}`} id={id} placeholder={placeholder} style={{ fontSize: `${fontSize}`, borderRadius: `${radius}`, padding: `${padding}`, width: "100%", border: "0" }} />
    )
}

export const TextArea = ({ placeholder, fontSize, radius, padding, id, minHeight, classes }) => {
    return (
        <textarea className={`${classes}`} placeholder={placeholder} id={id} style={{ fontSize: `${fontSize}`, borderRadius: `${radius}`, padding: `${padding}`, minHeight: `${minHeight}`, width: "100%", border: "0" }}></textarea>
    )
}

export const Checkbox = ({ label, fontSize, id }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <label className="checkbox-container">
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            <span className="label-text" style={{ fontSize: `${fontSize}` }}>{label}</span>
        </label>
    );
};

export const DropDown = ({ options, fontSize, padding, radius, classes, id }) => {
    return (
        <select className={`${classes}`} style={{ width: "100%", fontSize: `${fontSize}`, padding: `${padding}`, borderRadius: `${radius}`, border: "0" }} id={id}>
            <option>Select One</option>
            {
                options.map((opt, i) => {
                    return (
                        <option key={i}>{opt}</option>
                    )
                })
            }
        </select>
    )
}

export const RadioButtons = ({ options, groupName, classes }) => {
    return (
        <div className={`${classes}`}>
            {
                options.map((opt, i) => {
                    return (
                        <label key={i} class="radio-container">
                            <input type="radio" name={groupName} value={opt} />
                            <span class="dot"></span>
                            {opt}
                        </label>
                    )
                })
            }
        </div>
    )
}

export const DatePicker = ({ id, fontSize, padding, func, classes }) => {
    return (
        <input type="date" className={`${classes} remove-app`} id={`${id}`} style={{ width: "100%", border: "0", fontSize: `${fontSize}`, padding: `${padding}` }} onChange={func} />
    )
}
export const TimePicker = ({ id, fontSize, padding, func, classes }) => {
    return (
        <input type="time" className={`${classes} remove-app`} id={`${id}`} style={{ width: "100%", border: "0", fontSize: `${fontSize}`, padding: `${padding}` }} onChange={func} />
    )
}

export const Accordion = ({ dictionary, keyFontSize, valueFontSize, padding, keyClasses, valueClasses, classes }) => {
    const [chosenID, setChosenID] = useState(-1)
    return (
        <div className={`${classes}`}>
            {
                dictionary.map((dic, i) => {
                    return (
                        <div onClick={() => { chosenID == i ? setChosenID(-1) : setChosenID(i) }}>
                            <div className="separate vertical-center">
                                <p className={`${keyClasses}`} style={{ fontSize: `${keyFontSize}`, padding: `${padding}` }}>{dic.Key}</p>
                                <BsChevronDown style={{ fontSize: `${keyFontSize}` }} />
                            </div>
                            {
                                chosenID == i ?
                                    <p className={`${valueClasses}`} style={{ fontSize: `${valueFontSize}`, padding: `${padding}` }}>{dic.Value}</p> : <div></div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export const Border = ({ size, color, radius, children }) => {
    return (
        <div style={{ border: `${size} solid ${color}`, borderRadius: `${radius}`, height: 'fit-content' }}>
            {children}
        </div>
    )
}

export const Icon = ({ size, color, children }) => {
    return (
        <div style={{ fontSize: `${size}`, color: `${color}` }}>
            {children}
        </div>
    )
}

export const Underline = ({ size, color, children }) => {
    return (
        <div style={{ borderBottom: `${size} solid ${color}`, width: "fit-content" }}>
            {children}
        </div>
    )
}

export const ResponsiveWrapper = ({ children }) => {
    const [element, setElement] = useState(null);
    const handleResize = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth < 600) {
            console.log("Phone")
            setElement(children.find(child => child.type === PhoneScreen));
        } else if (screenWidth < 800) {
            console.log("Tablet")
            setElement(children.find(child => child.type === TabletScreen));
        } else if (screenWidth < 1000) {
            console.log("Laptop")
            setElement(children.find(child => child.type === LaptopScreen));
        } else if (screenWidth < 1200) {
            console.log("Desktop")
            setElement(children.find(child => child.type === DesktopScreen));
        } else {
            console.log("Desktop")
            setElement(children.find(child => child.type === DesktopScreen));
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div>{element}</div>;
};

export const PhoneScreen = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}
export const TabletScreen = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}
export const LaptopScreen = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}
export const DesktopScreen = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export const Grid = ({ children, template, orientation, gap, classes }) => {
    if (orientation == "column") {
        return (
            <div className={`${classes}`} style={{ display: "grid", gridTemplateColumns: `${template}`, gap: `${gap}` }}>
                {children}
            </div>
        )
    } else {
        return (
            <div className={`${classes}`} style={{ display: "grid", gridTemplateRows: `${template}`, gap: `${gap}` }}>
                {children}
            </div>
        )
    }
}
// use for SEO of Pages 

const imgURL = "https://huntsvillepianotuning.com/logo512.png"

export const Meta = ({ route }) => {
    return (
        <Helmet>
            <title>{route.Title}</title>
            <meta name="description" content={route.Desc} />
            <meta name="robots" content="index, follow" />
        {/* crawl */}
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />
            <meta name="yandexbot" content="index, follow" />
            <meta name="yandex" content="index, follow" />

            <link rel="canonical" href={`${c_mainURL}`} />
            <meta property="og:title" content={`${route.Title}`} />
            <meta property="og:description" content={route.Desc} />
            <meta property="og:url" content={`${c_mainURL}`} />
            <meta property="og:image" content={`${imgURL}`} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content={`${c_mainURL}`} />

            <meta name="twitter:title" content={`${route.Title}`} />
            <meta name="twitter:description" content={route.Desc} />
            <meta name="twitter:url" content={`${c_mainURL}`} />
            <meta name="twitter:image" content={`${imgURL}`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={`${c_mainURL}`} />

            <meta name="theme-color" content="#000000" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="msapplication-TileImage" content={`${imgURL}`} />
            <meta name="msapplication-config" content={`${imgURL}`} />
            <link rel="apple-touch-icon" sizes="180x180" href={`${imgURL}`} />
            <link rel="icon" type="image/png" sizes="32x32" href={`${imgURL}`} />
            <link rel="icon" type="image/png" sizes="16x16" href={`${imgURL}`} />

        </Helmet>
    )
}

export const Layer = ({ children, position, top, left, bottom, right, classes }) => {
    return (
        <div className={`${classes}`} style={{ position: `${position}`, top: `${top}`, left: `${left}`, bottom: `${bottom}`, right: `${right}`, width: `fit-content`, height: "fit-content" }}>
            {children}
        </div>
    )
}

export const Spacer = ({ height }) => {
    return (
        <div style={{ height: `${height}` }}></div>
    )
}

export const Divider = ({ size, color }) => {
    return (
        <hr style={{ border: 0, border: `${size} solid ${color}`, width: "100%" }} />
    )
}


