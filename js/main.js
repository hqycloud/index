function show_runtime() {
      const X = new Date("6/2/2024 14:00:00");
      const Y = new Date();
      const T = (Y.getTime() - X.getTime());
      const M = 24 * 60 * 60 * 1000;
      let a = T / M;
      const A = Math.floor(a);
      let b = (a - A) * 24;
      const B = Math.floor(b);
      let c = (b - B) * 60;
      const C = Math.floor((b - B) * 60);
      const D = Math.floor((c - C) * 60);

      const runtimeSpan = document.getElementById("runtime_span");
      runtimeSpan.innerHTML = "网站在各种灾难中运行了: " + A + "天" + B + "小时" + C + "分" + D + "秒";
}
window.setInterval(show_runtime, 1000); // 每秒更新一次