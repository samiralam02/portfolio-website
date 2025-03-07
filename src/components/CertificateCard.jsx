/**
 * @copyright 2025 SamirAlam
 * @license Apache-2.0 
 */

import PropTypes from "prop-types";
const CertificateCard = (
    {
        id,
        imgSrc,
        title,
        tags,
        certLink,
        classes
    }
) => {
    return (
        <div className={'relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transitions-colors ' + classes}>
            <figure className="img-box rounded-lg mb-4 overflow-hidden">
                <img 
                    src={imgSrc} 
                    alt={title}
                    loading="lazy"
                    className="w-full h-auto object-contain"
                />
            </figure>


            <div className="flex items-center justify-between gap-4">
                <div>
                   <h3 className="title-1 mb-3">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, index) => (
                            <span 
                            key={index} 
                            className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg "
                            >
                             {label}
                            </span>
                        ))
                        }
                    </div>

                </div>

                <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                    <span 
                    className="material-symbols-rounded "
                    aria-hidden="true"
                    >
                        arrow_outward
                    </span>
                </div>
            </div>

            <a 
                href={certLink}
                target="_blank"
                className="absolute inset-0"
            >
            </a>
        </div>
    );
}

export default CertificateCard;
