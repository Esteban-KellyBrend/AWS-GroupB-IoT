import logo from './logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="Home">
        <header className='Home-header'>
            This is a Sample Home Page.
            <img src={logo} className="Home-logo" alt="logo" />
            <p>
                see <code>/src/Home</code> and <code>/src/Home.css</code> to see this page's markup.
            </p>
        </header>

        <section className='Home-section'>
            <div className='section-split2'>
                <p>
                    Occaecat esse nisi officia ex ea culpa nisi officia. Enim ad adipisicing consectetur non aliqua dolor veniam. Et fugiat ipsum esse incididunt deserunt ad cupidatat magna et non dolor duis. Voluptate elit ad aute commodo fugiat officia pariatur quis anim tempor commodo quis eu. Aliquip enim aute cupidatat id sint aliquip non excepteur cillum minim. Minim deserunt mollit aliqua nulla in et aliqua adipisicing nostrud adipisicing fugiat. Adipisicing commodo cillum quis consequat mollit laborum consectetur. Esse cupidatat non sunt sit sint ad. Et quis aute minim consequat voluptate consequat culpa ad eu sunt. Ea id sunt aliqua enim do nulla. Esse et quis et officia id esse cillum.
                    Excepteur consequat non minim ipsum velit irure. Eu voluptate do veniam duis est quis quis ad elit cupidatat. Labore in amet nisi quis sunt ullamco cupidatat exercitation sunt elit. Ex commodo reprehenderit id est elit consectetur eu qui veniam.
                    Deserunt enim magna ea sint laboris ut et laboris officia. Ullamco adipisicing ipsum ullamco officia. Laborum sunt culpa elit eu.
                </p>
            </div>
            <div className='section-split2'>
                <p>
                    Occaecat esse nisi officia ex ea culpa nisi officia. Enim ad adipisicing consectetur non aliqua dolor veniam. Et fugiat ipsum esse incididunt deserunt ad cupidatat magna et non dolor duis. Voluptate elit ad aute commodo fugiat officia pariatur quis anim tempor commodo quis eu. Aliquip enim aute cupidatat id sint aliquip non excepteur cillum minim. Minim deserunt mollit aliqua nulla in et aliqua adipisicing nostrud adipisicing fugiat. Adipisicing commodo cillum quis consequat mollit laborum consectetur. Esse cupidatat non sunt sit sint ad. Et quis aute minim consequat voluptate consequat culpa ad eu sunt. Ea id sunt aliqua enim do nulla. Esse et quis et officia id esse cillum.
                    Excepteur consequat non minim ipsum velit irure. Eu voluptate do veniam duis est quis quis ad elit cupidatat. Labore in amet nisi quis sunt ullamco cupidatat exercitation sunt elit. Ex commodo reprehenderit id est elit consectetur eu qui veniam.
                    Deserunt enim magna ea sint laboris ut et laboris officia. Ullamco adipisicing ipsum ullamco officia. Laborum sunt culpa elit eu.
                </p>
            </div>
        </section>

        <footer className='Home-footer'>
            All rights reserved. IoT Group B (2023)
        </footer>
    </div>
  );
}

export default Home;
