import { useEffect, useState } from "react";

export const Box = (comp, width, height, paddingV, paddingH) => {
    return (
        <div style={{ display: "block", width: `${width}`, height: `${height}`, padding: `${paddingV} ${paddingH}` }}>
            {comp}
        </div>
    )
}

export const Image = (src, alt, classes) => {
    return (
        <img src={src} className={`${classes}`} alt={alt} />
    );
};

export const Button = (text, color, backgroundColor, radius, func, classes) => {
    return (
        <button className={`${classes} remove-app`} style={{ color: `${color}`, backgroundColor: `${backgroundColor}`, borderRadius: `${radius}px` }} onClick={func}>{text}</button>
    );
};

export const Text = (text, fontSize, weight, classes) => {
    return (
        <p className={`${classes}`} style={{ fontSize: `${fontSize}`, fontWeight: `${weight}`, width: "100%" }}>{text}</p>
    )
}

export const TextField = (placeholder, fontSize, radius, padding, id, classes) => {
    return (
        <input className={`remove-app ${classes}`} id={id} placeholder={placeholder} style={{ fontSize: `${fontSize}`, borderRadius: `${radius}`, padding: `${padding}`, width: "100%" }} />
    )
}

export const Checkbox = (label, fontSize, id) => {
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

export const DropDown = (options, fontSize, padding, classes, id) => {
    return (
        <select className={`${classes}`} style={{ width: "100%", fontSize: `${fontSize}`, padding: `${padding}` }} id={id}>
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

export const Grid = (comps, orientation, count) => {
    if (orientation == "column") {
        return (
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${count}, 1fr)` }}>
                {
                    comps.map((comp, i) => {
                        return(
                            <div key={i}>{comp}</div>
                        )
                    })
                }
                </div>
        )
    } else {
        return (
            <div style={{ display: "grid", gridTemplateRows: `repeat(${count}, 1fr)` }}>
                {
                    comps.map((comp, i) => {
                        return(
                            <div key={i}>{comp}</div>
                        )
                    })
                }
            </div>
        )
    }
}

export const ResponsiveElements = (one, two, three, four, five) => {
    const [element, setElement] = useState(null);

    const handleResize = () => {
        if (window.innerWidth < 600) {
            setElement(one);
        } else if (window.innerWidth < 800) {
            setElement(two);
        } else if (window.innerWidth < 1000) {
            setElement(three);
        } else if (window.innerWidth < 1200) {
            setElement(four);
        } else {
            setElement(five);
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

export const ResponsiveFunctions = () => {
    if (window.innerWidth < 600) {

    } else if (window.innerWidth < 800) {

    } else if (window.innerWidth < 1000) {

    } else if (window.innerWidth < 1200) {

    } else if (window.innerWidth < 1400) {

    }
}