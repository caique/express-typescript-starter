import express from "express";

let app = express();
app.set("port", process.env.PORT || 3000);

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello World!");
});

const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    
    console.log("  Press CTRL-C to stop\n");
});

export default server;