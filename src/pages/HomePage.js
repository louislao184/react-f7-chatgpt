import { Page, Navbar, Toolbar, Link, Block, Button,f7, useStore } from "framework7-react";

const HomePage = ({f7router}) => {
  const count = useStore("count");
  return (
    <>
      {/*  Initial Page */}
      <Page>
        {/* ... */}
        <Block>
          <Button fill href="/article/1/">
            Go to Article ID: 1
          </Button>
        </Block>
        <Block>
          <Button
            fill
            onClick={() => {
              f7router.navigate("/show/", {
                props: {
                  title: "The Title",
                  body: "This is the body",
                },
              });
            }}
          >
            Send via Navigate API
          </Button>
        </Block>
        <Button
            fill
            onClick={() => {
              f7router.navigate("/message/", {
                props: {
                  title: "The Title",
                  body: "This is the body",
                },
              });
            }}
          >
            Go to ChatGPT
          </Button>
          <Button
            fill
            onClick={() => {
              f7router.navigate("/conversaction/", {
                props: {
                  title: "The Title",
                  body: "This is the body",
                },
              });
            }}
          >
            Go to Conversaction ChatGPT
          </Button>
          <Button
            fill
            onClick={() => {
              f7router.navigate("/recorder/", {
                props: {
                  title: "The Title",
                  body: "This is the body",
                },
              });
            }}
          >
            Go to recorder
          </Button>
        <Block>Count: {count}
        <Button onClick={()=>{
          f7.store.dispatch("setCount",count+1);
        }}>increament</Button>
        </Block>
      </Page>
    </>
  );
};

export default HomePage;
