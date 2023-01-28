import one from "./img/howto2.png"
import two from "./img/howto3.png"
import three from "./img/howto4.png"
import apple from "./img/apple.svg"
import android from "./img/android.svg"
import linux from "./img/linux.svg"
import windows from "./img/windows.svg"
const Nav = () => {
    return (<div>
        <header>
                <nav className={"Nav"}>
                <div>Downloader</div>
                <div></div> {/* empty holder */}
                <div>Language</div>
                </nav>
        </header>
        <main>
            <h2>Everything Downloader</h2>
            <div className={"SBox"}>
                <div className={"SSBox"}>
            <div className={"Searcher"}>
            <input type="search" placeholder="paste your link here"/>
            </div>
            <div className={"SButton"}>
                <button>DownLoad</button>
            </div>
        </div>
            </div>
        </main>
        <body>
            <section> {/* supported patforms */}
            <div>Being the third most popular website in the world, YouTube offers an excellent viewer experience to its users. What it can’t provide is a YouTube video download. That is why ssyoutube is here to help you out!</div>
            <div>Supported Platforms:</div>
            <div>
                <ul>
                <li><img src={windows} alt="" /></li>
                <li><img src={apple} alt="" /></li>
                <li><img src={android} alt="" /></li>
                <li><img src={linux} alt="" /></li>
            </ul>
            </div>
            <div>
                With our YouTube video downloader, you can select videos and download them free of charge! You can get high-quality videos in MP4, MP3, SQ, HD, Full HD quality, and other formats. Our software works both on PC and mobile, allowing you to use it anywhere you are!
            </div>
            <div>
                <p>YouTube video download has never been so simple! Don’t waste your time. Just install our software on your devices and enjoy free content!</p>
            </div>
            <div>
                <p>Want to know more? You can find our download instructions below.</p>
            </div>
            </section>
            <section>{/* How to download youtube videos online (1) it will need grids*/}
            <h2>How to download youtube videos online</h2>
            <div>
                <div>
                    <img src={one} alt="" />
                    <p>Copy the link to the video and paste it into the input line.</p>
                </div>
                <div>
                    <img src={two} alt="" />
                    <p>Click "Download" and wait for the video to be ready.</p>
                </div>
                <div>
                    <img src={three} alt="" />
                    <p>Select the desired download options and click "Download".</p>
                </div>
            </div>
            </section>
            <section>{/* How to save youtube videos from various formats (2)*/}
            <div>
                <h3>How to save YouTube videos in various formats</h3>
                <ol>
                    <li>If you want to download YouTube videos in HD, MP3, or MP4, use Televzr Downloader.</li>
                    <li>YouTube video download is also possible with Ummy. Just click on the buttons “HD via Ummy” or “MP3 via Ummy” below the video you want to save.</li>
                    <li>Once you’ve installed the YouTube downloader app on your computer, you’ll see the “Download” button below each video.</li>
                    <li>This method allows to download youtube videos to Mac OS and works with all versions of Windows.</li>
                </ol>
            </div>
            </section>
        </body>
        </div>
    );
}

export default Nav;