import { useState, useEffect, useRef } from 'react';


function Main() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    async function fetchLogin() {
        try {
            const response = await fetch(`http://localhost:4000/userLogin.dox?userId=${userId}&password=${password}`);
            const jsonData = await response.json();
            console.log(jsonData);
            if (jsonData.result == "success") {
                alert("로그인이 되었습니다.");
            } else {
                alert("로그인에 실패 하셨습니다.");
            }
        } catch (error) {
            console.error("에러!");
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', alignItems: 'center' }}> {/* 반응형을 위해 minHeight 추가 */}
            <div style={{ width: '90%', maxWidth: '400px' }}> {/* 최대 너비를 400px로 설정 */}
                <div style={{ border: '1px solid', padding: '20px' }}> {/* 패딩 추가 */}
                    <div>
                        <img alt="인스타로고" style={{ width: '296px', height: '150px' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8jHyAAAAAhHR4kHiAIAAAeGhsaFRYcFxgXEhMJAAAcGBkEAAARCgwVDxH4+Pjz8/MNAAW+vL3b29tST1C4t7fFxcXS0tLs7OzLy8uSkJGFg4Tk5ORvbW6ioKFAPT5dW1wzLzCtq6x8ent0cnOdnJ0tKis9OTpnZWaqqKmMjIxeXF1EQ0N/fn5UUlNoZmaP1e65AAASrElEQVR4nO1c6XbivBJE7d0g2cZgDJh9Jyzv/3a3uyUTSHCSmcl3M3OO6s+E4NgqqZfqljytloWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFxT+BNM/z9KcH8V+h6o72WyAsxvlPD+a7kffHlw6ADBxB8CW8lD89pu9COjicdwAdFQoDR7iuEBEUPz20P0dVbK4CIFN+za2tYrZSib9x/mmKSd4/XkQHZHQjF8gOqN7qMCjx2+lWEsV/0xnTfDk+4crJULucK/xAAmznx36e3K5KziBEOPvBcf4W0uF0fQogVoYcRpRIQmfxMupWyduLN0gRlj8xzN9FerhIyKIHl1O7yXT4GDPTwfLcO5F5rpXwFz8z1t9BMsogdDU5N0SrDGbn5eBtQigmMwBPhdkEP6QdV8DwJwb7O6gWHhumg1aJ8eTB5V6RQ+TTLLg+O+BRCjX+Pw/0d1Hh+rluBOBMNkXVeNkQ6pSYkW7LQbRP/79B/gkSB7O5D5PiE71Z3RjCgD57qG2erfXfhzUmt2j3eXJL3DrGdjiIziPN9K9HDq6Ienox0mS5bra8WdswlEf6OKJAU3U3m+VfrlEnkeuLtFX188kOcpBZ43hXkWEYzOljUbTKK6q6DOALFFfX0Q9poNRzXOi2zgCHvYLhyW8WY9OsVgJ1ItxJzi9fyBoJKPlDMq8A4W9x9J46jlS2XEVev+nSOpg6yjAcxSbyfM6wxHzU+RkNtJHsVgW0L10vOk+lHDVdWoHDOk7Mh7fPHUUMPy8zKBBD49z9p1hHotOlEfjbHMJLAcFL47UT2F43xc3p1qq9647RUNHKP0MOX1rq/wIvAae3ZOtLXJMo73ykNh/SXwoUoVqYQzqfMxwAuuvP+OFcM2z1QhgssOYTvrqPjFWxPPSHT7XANJMb/OfSFp3Pza8ghs166b8ErSG50VnF/XWEwTR8zePlCCvF2OsAXJ5w2Pl6ar7EsN/5MYYrJbID/nuI1Wgj4+ka6rIvOWKRr9sWsYTFYzRJWiW4GVktMow/ZziSrsh+RgJNTYkwBDkvINwUB1NYVDtPwfwwSJM0P/QgAlNIJFUxnSyOaHchy5+TL+IP00B+nZ1QDmFZonbrpb578os91/IPZBM6SDine3R6o3T4GkryIIL9a2gY7rLOZZD3x70typgoHmGaidb0ze4zhmMIQt/U1VidiXWrum7F7Hy/ounqtO82yvj85MW7ze+SxETlOPyQx1+3g+zR9lYQAHSkHmw2RfOOp/T7raPNvBnjhQQS7U4n2u5611XuKMfxFexfH9nrtAPYHmtHna7uR1NBgDoqhsnvcUyUI+C9zZwi7232GnfEDSh89oFOg8Ihvq38ecDVKLuhIxx/mPIyXZUR8LN61Q7g6kbzmT++ANzLjnnkcv9BtjXFdPhrVE+heF8FTeGJAHlRN4b4F/NAX6KYYYXh6D3FfDq59PZ0dwxodb1cER2feq7eUf8mQe0vFIoloZ0dRDS5uwkIc73UoWCAse/8CwwnkXgnRVOQ6/dXpoHzwJCtNImZIWrWd9ot74EXhW1JEuKsRHjRv95gWA0Xo50SjqsXcYkcvHWJIcHhygZDQ+81sxypfj2NthFaC/8Cn6Xuh1d+Ur4ZYfqKqhgF4RPDJWO6MSzQSjkGJ8Be2feE9ybebMh9yP2Ix1qJWg4ufNb6rDV0KOuFIpprLmxOOJMhwGmspdKpLfyTuT6tGa7uHrQAGH/UbOiCCK76R+p19zDcSUc9tYLEcXRDzsXoeVa8KKlmuIw1w9GpVnBjNsYQ14uGh5ZinsIavKt/0Eo1jRxHlnrobAg7jmahAjKSktQQ/RatVc9IYRgWB34WCkIhxQdqAh9EUpR63f6t193Qn1gpZuj7uHwHz6UpNQyxdiSGI4iMO3ZpvbNZDxQrCFwA41t9fJ7ulm8dzTAHV69JzfnSdoAKMy5zqLzb8fxunQeGY/BgzYMSry79dGFoTpPWFlT75mYCnl+rh52dFrCgKc02PMUiPpCtI0NeH+2OFzRRiZaQTzgsovIxlnW8ecXC19fiiHVYrjy9SvtI5f3Y3GokOVa3SFvoie8ywxIzkBMlrcR7bR01YObTkvVu22eIpjYhJU8YlfSQHG3JCQetJT4AbRbHQZaLQcE7mOELZ/vwEBMJ94HRsRi4tGuihes+SG6s9Cp7RJsmHj+Y0qCV+K5u0KLPI8MDMUPj7nNw+FDzoovgI6/BHcNg//zSFIxhtfpXmkoH9j2fs+OY5C2Zg+CCgxneOzN+NKX11jfuNATX5bw3kv6CIwUbJH539SYk1XUdh6pQB5g+OjavtWbIS4IM5zRwE2UbMGKzGck7hvfp6B6JxBxYnXvztBXmrSsmsICCAk4QFtJyeshq58FR3kKL5uUY6kmMtsUjRsPWUX+sTCI5oGVGSGuOxJeeNusEJZeoV0LEdA9c82iV8tLJMgH/1htrAgXTF7PY9Ro21PkJnFqpkm2cyjma4B78W+6IhBrt/OCWlsll70pet9Z21S3QrCOhFe0kMqtNmY989ITziLNFbk5+bkZDi8bxGqNadO52KDtnZR926+BNvnuLnINpfs/Qb9garPDRx4yHvstwhfpbkLoThWWms/AVjppHW1WtXiT84JaKcSFiZoiWaHyARmyKbyNs8SbczKF+H64wayYcl5kzNFftwWhu0XgCh4UjOuUeDuhgJhY1gWY7Te+tVPv4exQYEVCloU1gEgIyopysGweElb7AdcLxcMVxxFjnhyIMa4r4nVYEuAC1QzpGwtQxlSQucwZ8/Mhkf5wRPTWYLEwiJQU4CWCAabODCi7BOK1V2WHTwHDBwXTm3zN83jQa+zoh5ORmAujJQ54fXhBXnUtP+7CY4zr6bdEOqjcM1zeRSDvlIXmkMg1Xdi0MiiXseKHYyNEf9belV4+LnoViOkWG0Sq7cDLgbHNp2pVGF0Z/2N8H0+eaprXd0eJlI9YROtah2ztKm5AL3VQ5xLDiVFyJQIRRXi+PZkg/MEOaKmaIxHT64Jviqg5gwnGIGRLTm3TRTTPBpVjA0sdHA0eGfIMU5g0MR1zmPwRTx3smZvsYaAaYaBMqSIwt45pQIGMLgBKfTl52ALaXcoG+KHkFcDTsK1RYaCulxXfikoeu/fAQuxz/l6TWKEkSQ0wGOggvPcOQqbrtnnkmekiob9CFpniDYQ/Ddd+7d0S5en9dsg0oIqGjsbYRpNpSqdMAzacTkcVT5Nsa1ZfuAqGFCFoIB3/UeiYXbTIzYvxBh8JLoBn2dwkPql4wneePUvPRS+HiKE5trb7QL/kGq8bO9JNg+rSPvZZOO0kBH7jha9VOP5f0BDEkbjMfReQRZq2h1i04wKCnx8dJj6xZK6Zr4Ls892gPzLkyGU53ZSvNkKSNzpaXtskWTIwMAdeOn4nBixNK1LidmZA4KZNHho5827/d6KbuQs3Rw6gDN8vZ1EJigPGMrQ8DfrvnQVFi9UM3mEp005RH6ogUr2+TAKGRQIhyCKejwKTK1dGat7biqjYYn7LFS0DNAZqrMJor8p6p5JCInkdqhp6JZusEKVbtT2paA3wmztfOf6Doy8dVxGrIddEgpx4GtGTQpf3woXTMatPwKCKQcAixUk8iP4RzmWCuapM8TTKMMJsBLqgJIYcOpBMM+wHEODtZRXNAi+PVAnOt0KyHEGwdl1TrxotSVPNO5EkeKA6YNxQKbcnRyxo+2LBFJ8Hlv0bicRXhrh802PHWGpauifSlrgGTIzWY5Jx+XoLjsHwe4eJSZCggpqNGUejpYD/Cv5coawcYa9QVv0bBVkpy02NJMmeMpjb37yT0AFzoo8HkXNF3AfN+BaFow4ajAFDMDXyWrOPMdYNINW+4mGB6lOINFEy6VZqU+XRm9BmdEkJLg+14M3phPZPpHJRMlGcaqiYKl5t9G9n2NnqaEp/uEKMhrTp0KoLLiaoH7QOZh/AVVp0VlSY3y1l3RCdAwmuUoQBOB6/Pd7ArMF/6ur4relvWMimdQgs+2qdF0wouj8qU4boKIJMdiG8GTAs13EIkJc4/Hb3BAFk03rocvPr+AGQAHGP2oCL1cKDqjN8FMORgB+facub4cFz/ZAYRXn/XS+piqf6wYOUEp/Kj+ulpMG1AuEA+y4ukUBP0jhS9v3hKsVrNN5rwcHxdP4qm/Hh5GXK1jut7K0kGhelUrSerRx/L37rcJ0107ia9DaaNFB0ilFR5XvLz1xB/LHu/DMoMWHK924NLyz8/1LJlZbrwP6VH8OHSf7VL0v6Nu8a/BBTRmPGfiKk+qMWpoSb/KjCme2/K/A+XEWBx6iFmXW5GfgtDDJSF85oPW8tDvZjTzPXV5c/ursv898H0g4UMCVhdYCKMP962+BqSLQyTyBX1YZcKYljon8eqsRT4Mro6mHY+Z/YIjDGYrr9lf36FUbmMWbUx+q9HGyZ1M+AP8CvB9H4ht1zTNZTLvwR0wpS6iaLeY6cujpk60p9/OotY1tHk/SJDLLOpMPi4C/RF9KjrlmuByaBy1WwtbH3xbHusgUr/+XkIXebvvhZMGU4EvbxVRu5Xzpp8iiGfHCOGoaGCY6HKmsaMeu++9foxUJ5GkydbNRhG44NR95+TaysPxBqTbnoK3G85Cz3J5swT6wjNkNpGxjioqx49JoukalxSXHsngPcHW9DqUcnfDq41gg/uO72zPkU8XESu+x1HMFOfRRyVWG4yuMyvK5psVW8XisduYTL2QTU1nfQqvberLm9/DJoc0XVxcvmthMvtiHR16LEC/o5kONSTjsEca8cCQCq0fuGK2XXTraj58Hie5RS5DjRQ5H0a8V6FY0XtyrQFzjN+jq8yULv9pjDyqexu9guIqVcDT7odv46Nt6U7HzJ0uKRVjWb63HnER11ov+vRUHI6dt+wU8EMnwU/CjX91jF+S45rvBm/K0NI8v547tI7XhyUfPies+wT2WOi0myktSpqjkbX6WZ0PFLj401CGuwAGt72GPNRwiffUR8FK71t9Ibc67syJb1wQu946b1uLPixTPymd59O8mpGV3fbKZSa3Rb0rPfRLB80xBrN8MmXfHbw0Cp30HaEH2VYGu1vB/fpzUMf7l84CVUHK7JvO025U8wQ42Bb6086U15vgF1Mpyo/fkXXEMPnGfoa6bO+y17W2a2n5uxIQlvD8PrmodDs1Xy8HHyDkqmxiMhKE+o06m5SdRc/aetxQ4FWwvbzvE9+KJ9GoQowYMJdpUdWuejQOzIPCzdbT5tr+t/FIqSMTnuemR4ctWLMyYfUdyj4p2hAbsz6u5y/rBpVBhVIDSX5klsIu2lellUxetlm9Oahe5cG/ct4+fRlmj/HPsJpr6Tj1oOjdrGJn5TwqVsj6W0dds0cgvsmSFUcNtNDTYpFbMNB1hHQu3gxN2ZMrKzJbefHJ++vfR8w1cuZclzXbJ5yOWFq4ZzatKYq0BFnqA9HaCxnHciyLAazMb/4SMSObm933ZFbzJ+9nPfdGEPEnl7vPJza5rRdfRbjGtHXukrkLX69wMNF3QQ0CSXB7Ok0v8oz3IGOKI4fxSAX+49eg/peFPo18bprTaeKTN7gPe0Kop0jzK4ViRzNJyd++oyMaQKQTX+olLt7n87MRhRN/99vwlSD4W0+sWAyZwkSdCy5nMgLHz/hCzZxTZ/OfvjbIt+cxEL/LQnPdu/D51AT7ef/T4HbjlNrTiR6Crq4ck7Av6q30lGnqLcim4Jw00mSvwqiPrqh9/F8R5K1mqHP/DrQMMOHwMnHOZp3aP4eIEPdhdVbsbRmyFAny7uDV7Tj9XhIgbpp/8SLn+iHzHAAOiVj6KRNYW7W0DLphcP4o4TTua87KM18U//2v8Ul0OPsqdlCcMuLGXI0oWXV9d8KJkc6k3rXpaKE/6d9uf8L0NhoW3fsdQrayyCfxPKYGXKZHlOyqDxqhdH27iulXvC2XP5LQS8RqfFLBw4kYPhdFPyB0yFxEB5F+7mkHLgEx31tNHRBut/RGvvvQUlCBXBtTWNtpK0yc/zFYNCTMnao7qjmUrECKjyU5reWeLXqfOWFz59HegKZUYukS1KHw+UKSL5Atik6KAIyUFkIE1rLgprHrwVT+uPZ/IvojjY6YBZdnRqSFyI7pr7qAqQE/3CS0iEXxATpePqa5Wpy/Gf+H4T3yLv1Sz398RGdLZ1jVazOlCEyLi1y/BhJ6P0bL9F/CYOz/n+dYM2k5ua95D/cqPrLkObDYV2YD7wsCLE8/uBUxr+OcvNyupz/YUe0sLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsPjn8T/mCTirtxp2uAAAAABJRU5ErkJggg=="></img>
                    </div>
                    <div style={{ margin: '30px' }}></div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <div>
                                <input onChange={handleUserIdChange} value={userId} style={{ borderRadius: '5px', width: '260px', height: '30px', margin: '5px', textAlign: 'center' }} type="text" placeholder="전화번호, 사용자 이름 또는 이메일"></input>
                            </div>
                            <div>
                                <input onChange={handlePasswordChange} value={password} style={{ borderRadius: '5px', width: '260px', height: '30px', margin: '5px', textAlign: 'center' }} type="password" placeholder="비밀번호"></input>
                            </div>
                            <div style={{ padding: '5px' }}></div>
                            <div>
                                <button onClick={fetchLogin} style={{ color: 'white', borderRadius: '8px', width: '260px', height: '30px', margin: '5px', backgroundColor: '#0a7cff', opacity: '.7' }}>로그인</button>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', margin: '10px 0' }}>
                        <div style={{ flex: '1', borderTop: '1px solid black' }}></div>
                        <div style={{ margin: '0 10px' }}>또는</div>
                        <div style={{ flex: '1', borderTop: '1px solid black' }}></div>
                    </div>
                    <div style={{ padding: '10px' }}></div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                        <button style={{ fontStyle: 'inherit', color: '#385185', width: '260px', height: '30px', margin: '5px', border: 'none', background: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <img alt="구글로고" style={{ width: '20px', height: '20px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1fbLse3jS4QRu0d7NbheUrcA5ePDvJP3dQ&s" />
                            Google 로그인
                        </button>
                    </div>
                    <div style={{ padding: '5px' }}></div>
                    <div>
                        <button style={{ paddingBottom: '15px', border: 'none', background: 'none', fontSize: '10px', textAlign: 'center', width: '100%' }}>비밀번호를 잊으셨나요?</button>
                    </div>
                </div>
                <div style={{ padding: '10px' }}></div>
                <div style={{ padding: '20px', textAlign: 'center', border: '1px solid black' }}>
                    <span>계정이 없으신가요?</span>
                    <button style={{ color: 'blue', border: 'none', background: 'none' }}>가입하기</button>
                </div>
                <div style={{ padding: '5px' }}></div>
                <div style={{ textAlign: 'center' }}>
                    <div>앱을 다운로드 하세요</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                        <a href="#"><img style={{ width: '130px', height: '40px' }} src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png" alt="Image 1"></img></a>
                        <a href="#"><img style={{ width: '110px', height: '40px' }} src="https://static.cdninstagram.com/rsrc.php/v3/yw/r/LBxTdceDfgS.png" alt="Image 2"></img></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main