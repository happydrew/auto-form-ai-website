import GetExtensionButton from "./GetExtensionButton"
import Image from "next/image"

const CallToAction = () => {
    return (
        <section className="text-zinc-900 pb-8 sm:pb-16 max-w-[88%]">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-16 w-full">
                <div className="mb-8">
                    <Image src='/assets/images/okhand.png' alt="Okhand Icon" width={64} height={64} className="mx-auto mb-4" />
                    <h2 className="mx-auto text-center text-4xl sm:text-6xl font-sans mb-2 font-bold dark:text-white">
                        Auto Fill Forms, Save Time
                    </h2>
                    <p className="max-w-screen-md mx-auto text-center text-base sm:text-lg text-zinc-400 mt-4">
                        Stop wasting hours on manual data entry—let AutoFormAI handle it with a single click.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <GetExtensionButton />
                </div>
            </div>
        </section>
    )
}

export default CallToAction