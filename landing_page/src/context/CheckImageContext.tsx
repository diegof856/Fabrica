import { createContext, type ReactNode } from "react";

export const CheckImageContext = createContext<any>(null);

export const CheckImageProvider = ({ children }: { children: ReactNode }) => {
    const renderImg = (iconOrPhoto: any, extraProps: any = {}) => {
        if (!iconOrPhoto) return null;
        if (typeof iconOrPhoto === 'string') {
            return <img src={iconOrPhoto} alt={extraProps.alt || "Imagem"} className={extraProps.className} />;
        }
        const IconComponent = iconOrPhoto;
        return <IconComponent size={extraProps.size || 40} color={extraProps.color} />;
    };
    return (
        <CheckImageContext.Provider value={{ renderImg }}>
            {children}
        </CheckImageContext.Provider>
    )
}