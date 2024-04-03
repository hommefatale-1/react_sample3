import Menu from "../components/Menu";
function Home() {
    const list = [
        { id: 1, title: '첫 번째 게시물', content: '첫 번째 게시물입니다.' },
        { id: 2, title: '두 번째 게시물', content: '두 번째 게시물입니다.' },
        { id: 3, title: '세 번째 게시물', content: '세 번째 게시물입니다.' },
        { id: 4, title: '세 번째 게시물', content: '세 번째 게시물입니다.' },
        { id: 5, title: '세 번째 게시물', content: '세 번째 게시물입니다.' },
        { id: 6, title: '세 번째 게시물', content: '세 번째 게시물입니다.' },
    ];
    return (<div>
        <h1 className="text-center">헤헤</h1>
        <div className="row">
            {list.map(item => (
                <div className="col-sm-3 col-md-6 col-lg-3" key={item.id}>
                    <Menu title={item.title} content={item.content}></Menu>
                </div>
            ))}
        </div>
    </div>)
}
export default Home;