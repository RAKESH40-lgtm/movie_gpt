export const  icon_url = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const login_src ="https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_large.jpg"

export const src_setUrls ="https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_small.jpg 959w"

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2FlODM4YTBmYjc2OGVmZWNjOWFjZTY5Mjk2ODczNiIsIm5iZiI6MTc2OTkzMTExMC40OTUwMDAxLCJzdWIiOiI2OTdmMDE2NjE4ZGYxYzkzYWNkYzk5ZGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QCAXmD1BVpmsIjsS8Godcgh7xD3b7ijRtvSD0dybBas'
  }
};

export const nowPlaying = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"

export const videoPlay =(id)=>{ return `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`}

export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500/"