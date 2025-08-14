var Q = JSON.parse($response.body);
Q.data.settings.lifetime_subscription = true;
Q.data.settings.store_subscription = true;
Q.data.settings.subscription = true;
$done({ body: JSON.stringify(Q) });
