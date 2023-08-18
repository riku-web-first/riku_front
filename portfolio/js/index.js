let MenuOpenerSp = function () {
    let GetSpOpener = document.getElementById('nav_list_sp_opener_trigger');
    let GetSpListWrapper = document.getElementById('nav_list_sp_trigger_sub');
    let GetSpListButtonLine = document.querySelectorAll('#nav_list_sp_opener_trigger div');
    let GetBody = document.getElementById('portfolio');
    GetSpOpener.addEventListener('click', function () {
        if (GetSpListWrapper.classList.contains('nav_list_sp_wrapper_active')) {
            GetSpListWrapper.classList.remove('nav_list_sp_wrapper_active');
        }
        else {
            GetSpListWrapper.classList.add('nav_list_sp_wrapper_active');
        }
        for (let i = 0; i < GetSpListButtonLine.length; i++) {
            GetSpListButtonLine[i].classList.toggle('active');
        }
        GetBody.classList.toggle('active');
    })
}
MenuOpenerSp();