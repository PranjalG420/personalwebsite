import { CustomLink } from "../../components/smallcomponents";
import "../../styles/globals.css";

export default function NotFound() {
    return (
        <main>
            {/* <Head>
                <title>404</title>
            </Head> */}
            <div className="flex flex-col items-center justify-around mx-auto">
                <p className="text-3xl desktop:text-4xl font-semibold">
                    404 Not Found
                </p>
                <p className="text-base tablet:text-lg my-4 italic text-neutral-400">
                    It seems what you are trying to find does not exist. Perhaps
                    you entered something wrong.
                </p>
                <CustomLink link="/">Home</CustomLink>
            </div>
        </main>
    );
}
