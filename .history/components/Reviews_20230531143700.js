import Link from "next/link";

const Reviews = ({ }) => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">What Our Customers Say About Us</h1>
                <div class="flex flex-wrap -m-4 px-20">
                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class="h-full text-center">
                            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://nationaltoday.com/wp-content/uploads/2021/04/Every-Kid-Healthy.jpg" />
                            <p class="leading-relaxed">Diese Plattform hat das Potenzial, die Zukunft meines Kindes maßgeblich zu beeinflussen. Dank AutoTest schreibt mein Kind jetzt regelmäßig Bestnoten in der Schule, und das Beste daran ist, dass es AutoTest nur zweimal in der Woche nutzen muss!</p>
                            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p class="text-gray-500">Senior Product Designer</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class="h-full text-center">
                            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://brocku.ca/brock-news/wp-content/uploads/2023/02/Prof-Photo_Della-Porta-Sandra-1600x1925.jpg?x70330" />
                            <p class="leading-relaxed">Ich verdanke diese Plattform die Zukunft meines Kindes, da es meinem Kind geholfen hat, nur 6er in der Schule zu schreiben. Und das Beste ist - Sie verwendet AutoTest nur 2 mal in der Woche!</p>
                            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                            <p class="text-gray-500">UI Develeoper</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 lg:mb-0 p-4">
                        <div class="h-full text-center">
                            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305" />
                            <p class="leading-relaxed">"Dank dieser Plattform habe ich als Zehntklässler eine unglaubliche Veränderung erlebt. AutoTest hat mir geholfen, meine Mathematikkenntnisse zu verbessern und meine Noten von durchschnittlich auf hervorragend zu steigern. Ich muss AutoTest nur zweimal in der Woche nutzen und sehe trotzdem große Fortschritte. Jetzt fühle ich mich viel selbstbewusster </p>
                            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                            <p class="text-gray-500">CTO</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;
