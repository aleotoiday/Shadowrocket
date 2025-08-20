let url = new URL($request.url);
const paramsToRemove = ["system_version", "app_version", "kdlc", "kss", "lib_ver", "device_model"];

// log trước
console.log("YouTube Login Request");
console.log("Original URL:", $request.url);

// xoá param
let changed = false;
paramsToRemove.forEach(p => {
  if (url.searchParams.has(p)) {
    url.searchParams.delete(p);
    changed = true;
  }
});

// nếu xoá thì log URL mới
if (changed) {
  console.log("Cleaned URL:", url.href);
  $done({ response: { status: 302, headers: { Location: url.href } } });
} else {
  $done({});
}
