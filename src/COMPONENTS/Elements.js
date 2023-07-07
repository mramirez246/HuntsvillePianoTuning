import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BsChevronDown } from 'react-icons/bs'
import { c_mainURL } from "../Constants";


export const Box = ({ comp, width, height, radius, paddingV, paddingH, classes }) => {
    return (
        <div className={`${classes}`} style={{ display: "block", width: `${width}`, height: `${height}`, padding: `${paddingV} ${paddingH}`, radius: `${radius}` }}>
            {comp}
        </div>
    )
}

export const Image = ({ src, alt, radius, classes }) => {
    return (
        <img src={src} className={`${classes}`} alt={alt} style={{ borderRadius: `${radius}`, width: "100%", height: "100%" }} />
    );
};

export const Button = ({ comp, color, backgroundColor, radius, func, classes }) => {
    return (
        <div className={`${classes} remove-app`} style={{ cursor: "pointer", color: `${color}`, backgroundColor: `${backgroundColor}`, borderRadius: `${radius}` }} onClick={func}>{comp}</div>
    );
};

export const Text = ({ text, fontSize, weight, color, spacing, lineHeight, classes }) => {
    return (
        <p className={`${classes}`} style={{ fontSize: `${fontSize}`, fontWeight: `${weight}`, width: "100%", letterSpacing: `${spacing}`, lineHeight: `${lineHeight}`, color: `${color}` }}>
            {text}
        </p>
    )
}

export const TextField = ({ placeholder, fontSize, radius, padding, id, classes }) => {
    return (
        <input className={`remove-app ${classes}`} id={id} placeholder={placeholder} style={{ fontSize: `${fontSize}`, borderRadius: `${radius}`, padding: `${padding}`, width: "100%" }} />
    )
}

export const TextArea = ({ placeholder, fontSize, radius, padding, id, minHeight, classes }) => {
    return (
        <textarea className={`${classes}`} placeholder={placeholder} id={id} style={{ fontSize: `${fontSize}`, borderRadius: `${radius}`, padding: `${padding}`, minHeight: `${minHeight}`, width: "100%" }}></textarea>
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
        <select className={`${classes}`} style={{ width: "100%", fontSize: `${fontSize}`, padding: `${padding}`, borderRadius: `${radius}` }} id={id}>
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

// export const Grid = ({ comps, orientation, gap, count }) => {
//     if (orientation == "column") {
//         return (
//             <div style={{ display: "grid", gridTemplateColumns: `repeat(${count}, 1fr)`, gap: `${gap}` }}>
//                 {
//                     comps.map((comp, i) => {
//                         return (
//                             <div key={i}>{comp}</div>
//                         )
//                     })
//                 }
//             </div>
//         )
//     } else {
//         return (
//             <div style={{ display: "grid", gridTemplateRows: `repeat(${count}, 1fr)`, gap: `${gap}` }}>
//                 {
//                     comps.map((comp, i) => {
//                         return (
//                             <div key={i}>{comp}</div>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }

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

export const Border = ({ comp, size, color, radius }) => {
    return (
        <div style={{ border: `${size} solid ${color}`, borderRadius: `${radius}`, height: "fit-content", width: "fit-content" }}>
            {comp}
        </div>
    )
}

export const Icon = ({ comp, size, color }) => {
    return (
        <div style={{ fontSize: `${size}`, color: `${color}` }}>
            {comp}
        </div>
    )
}

export const Underline = ({ comp, size, color }) => {
    return (
        <div style={{ borderBottom: `${size} solid ${color}` }}>
            {comp}
        </div>
    )
}

export const ResponsiveElements = ({ phone, smalltablet, tablet, smalllaptop, desktop }) => {
    const [element, setElement] = useState(null);

    const handleResize = () => {
        if (window.innerWidth < 600) {
            setElement(phone);
        } else if (window.innerWidth < 800) {
            setElement(smalltablet);
        } else if (window.innerWidth < 1000) {
            setElement(tablet);
        } else if (window.innerWidth < 1200) {
            setElement(smalllaptop);
        } else {
            setElement(desktop);
        }
    };

    useEffect(() => {
        // Add event listener on component mount
        window.addEventListener('resize', handleResize);
        // Call handleResize initially to set the element based on the current screen size
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div>{element}</div>;
};

export const Grid = ({ comps, count, orientation, gap, classes }) => {
    if (orientation == "column") {
        return (
            <div className={`${classes}`} style={{display: "grid", gridTemplateColumns: `repeat(${count}, 1fr)`, gap: `${gap}`}}>
                {comps.map((comp, i) => {
                    return (
                        <div key={i}>
                            {comp}
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div className={`${classes}`} style={{display: "grid", gridTemplateRows: `repeat(${count}, 1fr)`, gap: `${gap}`}}>
                {comps.map((comp, i) => {
                    return (
                        <div key={i}>
                            {comp}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export const Meta = ({ route }) => {
    return (
        <Helmet>
            <title>{route.Title}</title>
            <meta name="description" content={route.Desc} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`${c_mainURL}`} />
            <meta property="og:title" content={`${route.Title}`} />
            <meta property="og:description" content={route.Desc} />
            <meta property="og:url" content={`${c_mainURL}`} />
            <meta property="og:image" content={`${c_mainURL}/src/PHOTOS/logo.png`} />
        </Helmet>
    )
}

export const ResponsiveFunctions = () => {
    if (window.innerWidth < 600) {

    } else if (window.innerWidth < 800) {

    } else if (window.innerWidth < 1000) {

    } else if (window.innerWidth < 1200) {

    } else if (window.innerWidth < 1400) {

    }
}

export const Layer = ({ comp, position, top, left, bottom, right, classes }) => {
    return (
        <div className={`${classes}`} style={{ position: `${position}`, top: `${top}`, left: `${left}`, bottom: `${bottom}`, right: `${right}`, width: `fit-content`, height: "fit-content" }}>
            {comp}
        </div>
    )
}