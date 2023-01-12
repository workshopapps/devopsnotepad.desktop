import Footer from '../../Component/Footer/Footer';
import Navigation from '../../Component/Navigation/Navigation';
import style from './Download.module.css';
import apple from './assets/apple.png';
import windows from './assets/windows.png';
import mobile from './assets/mobile.png';
import desktop from './assets/desktop.png';
import android from './assets/android.png';
import rightChevron from './assets/right-chevron.png';




function Download() {
    return (
        <>
            <Navigation />
            <div className={style.download}>
                <h2 className={style.download__header}>Opspad Download</h2>

                <div className={style.container}>
                    <div className={style.download__card}>
                        <div className={style.device__frame}>
                            <img src={desktop} alt="desktop" />
                        </div>

                        <p>Desktop App</p>

                        <a href='https://drive.google.com/file/d/1DyvJZORzS4BPVaUdXYPyfSto_0XEIqzA/view?usp=share_link' className={style.card__item} download>
                            <img className={style.device1} src={apple} alt="apple" />
                            <p>Opspad for macOS</p>

                            <img className={style.chevron} src={rightChevron} alt="arrow" />
                        </a>

                        <a href='https://github.com/workshopapps/devopsnotepad.desktop/releases/download/v0.1.0/OpsPad.0.3.0.exe' className={style.card__item} download>
                            <img className={style.devices} src={windows} alt="WindowsOS" />
                            <p>Opspad for Windows (64-bit)</p>

                            <img className={style.chevron} src={rightChevron} alt="arrow" />
                        </a>

                        <a href='https://github.com/workshopapps/devopsnotepad.desktop/releases/download/v0.1.0/OpsPad.0.3.0.exe' className={style.card__item} download>
                            <img className={style.devices} src={windows} alt="WindowsOS" />
                            <p>Opspad for Windows (32-bit)</p>

                            <img className={style.chevron} src={rightChevron} alt="arrow" />
                        </a>

                    </div>

                    <div className={style.download__card}>
                        <div className={style.device__frame}>
                            <img src={mobile} alt="mobile" />
                        </div>

                        <p>Mobile App</p>
                        <a href='https://drive.google.com/file/d/1zbtFzeiZDfPYxm5z5wqayPWG5PZ-QDnP/view?usp=sharing' className={style.card__item} download>
                            <img className={style.device4} src={android} alt="AndriodOs" />
                            <p>Opspad for Android</p>

                            <img className={style.chevron} src={rightChevron} alt="arrow" />
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default Download;