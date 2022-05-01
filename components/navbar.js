function navbar(){
    return `<div id="nav1">
    <a href=""><p>Home</p></a>
</div>
<div id="nav2">
</div>
<div id="nav3">
</div>`
}

function translator(){
    return `<div id="input">
    <button id="translate">Translate</button>
    <select name="" id="inputselect">
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="az">Azerbaijani</option>
        <option value="zh">Chinese</option>
        <option value="cs">Czech</option>
        <option value="nl">Dutch</option>
        <option value="fi">Finnish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="hi">Hindi</option>
        <option value="hu">Hungarian</option>
        <option value="id">Indonesian</option>
        <option value="ga">Irish</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="ko">Korean</option>
        <option value="pl">Polish</option>
        <option value="pt">Portuguese</option>
        <option value="ru">Russian</option>
        <option value="es">Spanish</option>
        <option value="sv">Swedish</option>
        <option value="tr">Turkish</option>
        <option value="uk">Ukranian</option>
        <option value="vi">Vietnamese</option>
    </select>
    <hr>

    <textarea name="" id="text-input" cols="30" rows="10"></textarea>

</div>
<div id="output">
    <!-- <button>Translate</button> -->
    <select name="" id="outputselect">
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="az">Azerbaijani</option>
        <option value="zh">Chinese</option>
        <option value="cs">Czech</option>
        <option value="nl">Dutch</option>
        <option value="fi">Finnish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="hi">Hindi</option>
        <option value="hu">Hungarian</option>
        <option value="id">Indonesian</option>
        <option value="ga">Irish</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="ko">Korean</option>
        <option value="pl">Polish</option>
        <option value="pt">Portuguese</option>
        <option value="ru">Russian</option>
        <option value="es">Spanish</option>
        <option value="sv">Swedish</option>
        <option value="tr">Turkish</option>
        <option value="uk">Ukranian</option>
        <option value="vi">Vietnamese</option>
    </select>
    <hr>
    <div id="translatedoutput"></div>
</div>`
}

export {navbar , translator};