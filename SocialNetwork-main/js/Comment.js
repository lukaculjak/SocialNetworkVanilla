class Comment {
  post_id = "";
  user_id = "";
  content = "";
  api_url = "https://634744d00484786c6e7df9f3.mockapi.io";

  create() {
    let data = {
      post_id: this.post_id,
      user_id: this.user_id,
      content: this.content,
    };

    data = JSON.stringify(data);

    fetch(this.api_url + "/comments", {
      method: "POST",
      headers: {
        "Content-Type": " application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Uspjesno ste ostavili komentar!");
      });
  }

  async get(post_id) {
    //return 3;
    let api_ur = this.api_url + "/comments";

    const response = await fetch(api_ur);
    const data = await response.json();
    let post_comments = [];

    let i = 0;
    data.forEach((item) => {
      if (item.post_id === post_id) {
        post_comments[i] = item;
        i++;
      }
    });
    return post_comments;
  }
}
