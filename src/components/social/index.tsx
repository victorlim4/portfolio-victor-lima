import './styles.scss';

interface IProps {
    instagram: string,
    facebook: string,
    linkedin: string
}

export const Social = (props: IProps) => {
    return (
        <div className="social">
            <a 
                href={props.facebook}
                className="icon"
                >
                <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12.6363 12.8214H14.8928L15.7954 9.21102H12.6363V7.40583C12.6363 6.47615 12.6363 5.60063 14.4415 5.60063H15.7954V2.56791C15.5011 2.5291 14.39 2.44154 13.2167 2.44154C10.7661 2.44154 9.02591 3.93715 9.02591 6.68375V9.21102H6.31812V12.8214H9.02591V20.4935H12.6363V12.8214Z" fill="#232233"/>
                </svg>
            </a>
            <div className="divider"></div>
            <a href={props.instagram} className="icon">
            <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M11.4544 2.44154C13.9068 2.44154 14.2128 2.45057 15.1749 2.4957C16.1362 2.54083 16.7906 2.69156 17.3665 2.91541C17.9622 3.14467 18.464 3.45516 18.9659 3.9561C19.4248 4.40731 19.78 4.9531 20.0066 5.5555C20.2295 6.13046 20.3811 6.78574 20.4263 7.74701C20.4687 8.70918 20.4804 9.01516 20.4804 11.4675C20.4804 13.9199 20.4714 14.2259 20.4263 15.188C20.3811 16.1493 20.2295 16.8037 20.0066 17.3795C19.7806 17.9823 19.4254 18.5282 18.9659 18.9789C18.5145 19.4377 17.9688 19.7929 17.3665 20.0196C16.7915 20.2426 16.1362 20.3942 15.1749 20.4393C14.2128 20.4818 13.9068 20.4935 11.4544 20.4935C9.00208 20.4935 8.6961 20.4845 7.73393 20.4393C6.77267 20.3942 6.11828 20.2426 5.54243 20.0196C4.93979 19.7935 4.3939 19.4383 3.94303 18.9789C3.48397 18.5278 3.12882 17.982 2.90233 17.3795C2.67849 16.8046 2.52775 16.1493 2.48262 15.188C2.4402 14.2259 2.42847 13.9199 2.42847 11.4675C2.42847 9.01516 2.43749 8.70918 2.48262 7.74701C2.52775 6.78484 2.67849 6.13136 2.90233 5.5555C3.12819 4.95273 3.48343 4.40679 3.94303 3.9561C4.39403 3.49689 4.93988 3.14171 5.54243 2.91541C6.11828 2.69156 6.77177 2.54083 7.73393 2.4957C8.6961 2.45328 9.00208 2.44154 11.4544 2.44154ZM11.4544 6.95453C10.2575 6.95453 9.10963 7.43 8.26328 8.27635C7.41693 9.1227 6.94145 10.2706 6.94145 11.4675C6.94145 12.6644 7.41693 13.8123 8.26328 14.6587C9.10963 15.505 10.2575 15.9805 11.4544 15.9805C12.6514 15.9805 13.7993 15.505 14.6456 14.6587C15.492 13.8123 15.9674 12.6644 15.9674 11.4675C15.9674 10.2706 15.492 9.1227 14.6456 8.27635C13.7993 7.43 12.6514 6.95453 11.4544 6.95453V6.95453ZM17.3213 6.72888C17.3213 6.42965 17.2025 6.14268 16.9909 5.93109C16.7793 5.7195 16.4923 5.60063 16.1931 5.60063C15.8938 5.60063 15.6069 5.7195 15.3953 5.93109C15.1837 6.14268 15.0648 6.42965 15.0648 6.72888C15.0648 7.02811 15.1837 7.31508 15.3953 7.52667C15.6069 7.73826 15.8938 7.85713 16.1931 7.85713C16.4923 7.85713 16.7793 7.73826 16.9909 7.52667C17.2025 7.31508 17.3213 7.02811 17.3213 6.72888ZM11.4544 8.75973C12.1726 8.75973 12.8613 9.04501 13.3691 9.55282C13.8769 10.0606 14.1622 10.7494 14.1622 11.4675C14.1622 12.1857 13.8769 12.8744 13.3691 13.3822C12.8613 13.89 12.1726 14.1753 11.4544 14.1753C10.7363 14.1753 10.0476 13.89 9.53974 13.3822C9.03193 12.8744 8.74665 12.1857 8.74665 11.4675C8.74665 10.7494 9.03193 10.0606 9.53974 9.55282C10.0476 9.04501 10.7363 8.75973 11.4544 8.75973V8.75973Z" fill="#232233"/>
            </svg>
            </a>
            <div className="divider"></div>
            <a href={props.linkedin} className="icon">
            <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M16.73 0H1.34665C0.61 0 0.0129395 0.578803 0.0129395 1.29318V16.7562C0.0129395 17.4706 0.6102 18.05 1.34665 18.05H16.73C17.4667 18.05 18.0629 17.4704 18.0629 16.7562V1.29318C18.0629 0.579004 17.4667 0 16.73 0V0ZM5.48516 15.1091H2.75797V6.95968H5.48516V15.1091V15.1091ZM4.12177 5.84639H4.10352C3.18897 5.84639 2.59612 5.22086 2.59612 4.43789C2.59612 3.63908 3.20642 3.03059 4.13901 3.03059C5.07181 3.03059 5.6456 3.63888 5.66365 4.43789C5.66365 5.22106 5.07201 5.84639 4.12177 5.84639V5.84639ZM15.3161 15.1091H12.5897V10.749C12.5897 9.65314 12.1946 8.90567 11.2087 8.90567C10.4544 8.90567 10.0067 9.41007 9.81019 9.89681C9.73718 10.0709 9.71933 10.314 9.71933 10.557V15.1089H6.99335C6.99335 15.1089 7.02905 7.72379 6.99335 6.95948H9.71953V8.11488C10.0815 7.55974 10.7281 6.76775 12.1762 6.76775C13.9706 6.76775 15.3161 7.93177 15.3161 10.4361V15.1091V15.1091ZM9.70188 8.14075C9.7067 8.13313 9.71312 8.1239 9.71953 8.11508V8.14075H9.70188Z" fill="#232233"/>
            </svg>
            </a>
            
        </div>
    )
}