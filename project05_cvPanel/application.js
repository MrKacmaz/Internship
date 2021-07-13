function openModalProjects(pNum) {
    // Modals open
    $('#staticBackdrop').modal('show');
    switch (pNum) {
        case 'p1':
            $('#modalBody').html(
                '<div class="text-center">' +
                '<iframe src="../Project01_ResponsePage/response.html" width="1040px" height="840px" allowfullscreen></iframe>' +
                '</div>'
            );
            break;

        case 'p2':
            $('#modalBody').html(
                '<div class="text-center">' +
                '<iframe src="../project03_ResponsePageAPI/index.html" width="1040px" height="840px" allowfullscreen></iframe>' +
                '</div>'
            );
            break;

        case 'p3':
            $('#modalBody').html(
                '<div class="text-center">' +
                '<iframe src="../Project02_SingleGamePage/index.html" width="1040px" height="840px" allowfullscreen></iframe>' +
                '</div>'
            );
            break;

        case 'p4':
            $('#modalBody').html(
                '<div class="text-center">' +
                '<iframe src="../project04_coin/index.html" width="1040px" height="840px" allowfullscreen></iframe>' +
                '</div>'
            );
            break;

        default:
            swal("Error!", "Error in Open Modal Function", "error");
            break;
    }
}

