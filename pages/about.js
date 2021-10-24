import Link from 'next/link'

const about = () => {
    return (
        <>
            <h2>About me 👩🏻‍💻</h2>
            <p>This is a demo app. A simple online demo store.</p>
            <Link href='/new'>
                <a><span>Click here to create your store.</span></a>
            </Link>
            <h3>Research &amp; Development project using NextJS</h3>
            <h4>with REST API, MongoD</h4>
            by
            <p>Raiyan Haron | hrdevs@gmail.com</p>
            ©️ 2021
        </>
    )
}

export default about
