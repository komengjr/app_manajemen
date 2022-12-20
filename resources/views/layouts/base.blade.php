<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--favicon-->
    <link rel="icon" href="{{ url('logo-icon.png', []) }}" type="image/png" />
    <!--plugins-->
    <link href="{{ url('assets/plugins/simplebar/css/simplebar.css', []) }}" rel="stylesheet" />
    <link href="{{ url('assets/plugins/fullcalendar/css/main.min.css', []) }}" rel="stylesheet" />
    <link href="{{ url('assets/plugins/select2/css/select2.min.css', []) }}" rel="stylesheet" />
	<link href="{{ url('assets/plugins/select2/css/select2-bootstrap4.css', []) }}" rel="stylesheet" />
    <link href="{{ url('assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css', []) }}" rel="stylesheet" />
    <link href="{{ url('assets/plugins/metismenu/css/metisMenu.min.css', []) }}" rel="stylesheet" />
    <link href="{{ url('assets/plugins/datatable/css/dataTables.bootstrap5.min.css', []) }}" rel="stylesheet" />
    <!-- loader-->
    <link href="{{ url('assets/css/pace.min.css', []) }}" rel="stylesheet" />
    <script src="{{ url('assets/js/pace.min.js', []) }}"></script>
    <!-- Bootstrap CSS -->
    <link href="{{ url('assets/css/bootstrap.min.css', []) }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <link href="{{ url('assets/css/app.css', []) }}" rel="stylesheet">
    <link href="{{ url('assets/css/icons.css', []) }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="{{ url('assets/js/jquery.min.js', []) }}"></script>
    <title>App V 1.0 - {{auth::user()->name}}</title>
</head>

<body class="bg-theme bg-theme9">
    <!--wrapper-->
    <div class="wrapper">
        <!--sidebar wrapper -->
        <div class="sidebar-wrapper" data-simplebar="true">
            <div class="sidebar-header">
                <div>
                    <img src="{{ url('logo-icon.png', []) }}" class="logo-icon" alt="logo icon">
                </div>
                <div>
                    <h4 class="logo-text">App V 1.0</h4>
                </div>
                <div class="toggle-icon ms-auto"><i class='fa fa-minus-square'></i>
                </div>
            </div>
            <!--navigation-->
            <ul class="metismenu" id="menu">
                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon"><i class='bx bx-home-circle'></i>
                        </div>
                        <div class="menu-title">Dashboard</div>
                    </a>
                    <ul>
                       
                        <li> <a href="{{ url('home', []) }}"><i class="lni lni-checkmark-circle"></i>Home </a>
                        </li>
                      
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="has-arrow">
                        <div class="parent-icon"><i class="bx bx-category"></i>
                        </div>
                        <div class="menu-title">Penilaian</div>
                    </a>
                    <ul>
                        <li> <a href="#"><i class="bx bx-right-arrow-alt"></i>----</a>
                        </li>
                        
                       
                    </ul>
                </li>
                <li class="menu-label">About App</li>
               
                <li>
                    <a href="#">
                        <div class="parent-icon"><i class="bx bx-help-circle"></i>
                        </div>
                        <div class="menu-title">FAQ</div>
                    </a>
                </li>
                {{-- <li>
                    <a href="#">
                        <div class="parent-icon"><i class="bx bx-diamond"></i>
                        </div>
                        <div class="menu-title">Pricing</div>
                    </a>
                </li> --}}
                @if (auth::user()->akses == 1)
                <li class="menu-label">Master Data</li>
                <li>
                    <a class="has-arrow" href="javascript:;">
                        <div class="parent-icon"><i class="lni lni-laptop-phone"></i>
                        </div>
                        <div class="menu-title">Master Data</div>
                    </a>
                    <ul>
                        <li> <a href="{{ url('masteradmin/data/karyawan', []) }}" ><i class="lni lni-library"></i>Data Kawyawan</a>
                        </li>
                        <li> <a href="{{ url('masteradmin/data/jadwalkaryawan', []) }}" ><i class="lni lni-radio-button"></i>Jadwal Kawyawan</a>
                        </li>
                        <li> <a href="{{ url('uploadabsensi', []) }}"><i class="lni lni-exit-up"></i>Upload Absensi</a>
                        </li>
                        <li> <a href="{{ url('masteradmin/data/cetakabsensi', []) }}"><i class="lni lni-printer"></i>Cetak Absensi</a>
                        </li>
                    </ul>
                </li>
                @endif
               
                <li>
                    <a class="has-arrow" href="javascript:;">
                        <div class="parent-icon"><i class="bx bx-map-alt"></i>
                        </div>
                        <div class="menu-title">Maps</div>
                    </a>
                    <ul>
                        <li> <a href="map-google-maps.html"><i class="bx bx-right-arrow-alt"></i>Google Maps</a>
                        </li>
                        <li> <a href="map-vector-maps.html"><i class="bx bx-right-arrow-alt"></i>Vector Maps</a>
                        </li>
                    </ul>
                </li>
                <li class="menu-label">Others</li>
                
                <li>
                    <a href="home" target="_blank">
                        <div class="parent-icon"><i class="bx bx-folder"></i>
                        </div>
                        <div class="menu-title">Documentation</div>
                    </a>
                </li>
                <li>
                    <a href="home" target="_blank">
                        <div class="parent-icon"><i class="bx bx-support"></i>
                        </div>
                        <div class="menu-title">Support</div>
                    </a>
                </li>
            </ul>
            <!--end navigation-->
        </div>
        <!--end sidebar wrapper -->
        <!--start header -->
        <header>
            <div class="topbar d-flex align-items-center">
                <nav class="navbar navbar-expand">
                    <div class="mobile-toggle-menu"><i class='bx bx-menu'></i>
                    </div>
                    <div class="search-bar flex-grow-1">
                        {{-- <div class="position-relative search-bar-box">
                            <input type="text" class="form-control search-control"
                                placeholder="Type to search..."> <span
                                class="position-absolute top-50 search-show translate-middle-y"><i
                                    class='bx bx-search'></i></span>
                            <span class="position-absolute top-50 search-close translate-middle-y"><i
                                    class='bx bx-x'></i></span>
                        </div> --}}
                    </div>
                    <div class="top-menu ms-auto">
                        <ul class="navbar-nav align-items-center">
                            {{-- <li class="nav-item mobile-search-icon">
                                <a class="nav-link" href="#"> <i class='bx bx-search'></i>
                                </a>
                            </li> --}}
                            <li class="nav-item dropdown dropdown-large">
                                <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false"> <i
                                        class='bx bx-category'></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <div class="row row-cols-3 g-3 p-3">
                                        <div class="col text-center">
                                            <div class="app-box mx-auto"><i class='bx bx-group'></i>
                                            </div>
                                            <div class="app-title">Teams</div>
                                        </div>
                                        <div class="col text-center">
                                            <div class="app-box mx-auto"><i class='bx bx-atom'></i>
                                            </div>
                                            <div class="app-title">Projects</div>
                                        </div>
                                        <div class="col text-center">
                                            <div class="app-box mx-auto"><i class='bx bx-shield'></i>
                                            </div>
                                            <div class="app-title">Tasks</div>
                                        </div>
                                        <div class="col text-center">
                                            <div class="app-box mx-auto"><i class='bx bx-notification'></i>
                                            </div>
                                            <div class="app-title">Feeds</div>
                                        </div>
                                        <div class="col text-center">
                                            <div class="app-box mx-auto"><i class='bx bx-file'></i>
                                            </div>
                                            <div class="app-title">Files</div>
                                        </div>
                                        <div class="col text-center">
                                            <div class="app-box mx-auto"><i class='bx bx-filter-alt'></i>
                                            </div>
                                            <div class="app-title">Alerts</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown dropdown-large">
                                <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                    href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="alert-count">7</span>
                                    <i class='bx bx-bell'></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <a href="javascript:;">
                                        <div class="msg-header">
                                            <p class="msg-header-title">Notifications</p>
                                            <p class="msg-header-clear ms-auto">Marks all as read</p>
                                        </div>
                                    </a>
                                    <div class="header-notifications-list">
                                        
                                        <a class="dropdown-item" href="javascript:;">
                                            <div class="d-flex align-items-center">
                                                <div class="notify"><i class="bx bx-message-detail"></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="msg-name">New Comments <span
                                                            class="msg-time float-end">4 hrs
                                                            ago</span></h6>
                                                    <p class="msg-info">New customer comments recived</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item" href="javascript:;">
                                            <div class="d-flex align-items-center">
                                                <div class="notify"><i class='bx bx-check-square'></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="msg-name">Your item is shipped <span
                                                            class="msg-time float-end">5 hrs
                                                            ago</span></h6>
                                                    <p class="msg-info">Successfully shipped your item</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item" href="javascript:;">
                                            <div class="d-flex align-items-center">
                                                <div class="notify"><i class='bx bx-user-pin'></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="msg-name">New 24 authors<span
                                                            class="msg-time float-end">1 day
                                                            ago</span></h6>
                                                    <p class="msg-info">24 new authors joined last week</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item" href="javascript:;">
                                            <div class="d-flex align-items-center">
                                                <div class="notify"><i class='bx bx-door-open'></i>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="msg-name">Defense Alerts <span
                                                            class="msg-time float-end">2 weeks
                                                            ago</span></h6>
                                                    <p class="msg-info">45% less alerts last 4 weeks</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <a href="javascript:;">
                                        <div class="text-center msg-footer">View All Notifications</div>
                                    </a>
                                </div>
                            </li>
                            <li class="nav-item dropdown dropdown-large">
                                <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                    href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="alert-count">2</span>
                                    <i class='bx bx-comment'></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <a href="javascript:;">
                                        <div class="msg-header">
                                            <p class="msg-header-title">Messages</p>
                                            <p class="msg-header-clear ms-auto">Marks all as read</p>
                                        </div>
                                    </a>
                                    <div class="header-message-list">
                                        <a class="dropdown-item compose-mail-btn" id="buttonchatting" href="javascript:;" data-url="{{ url('chat/view', ['id_user'=>2]) }}">
                                            <div class="d-flex align-items-center">
                                                <div class="user-online">
                                                    <img src="{{ url('assets/images/avatars/avatar-1.png', []) }}" class="msg-avatar"
                                                        alt="user avatar">
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="msg-name">Daisy Anderson <span
                                                            class="msg-time float-end">5 sec
                                                            ago</span></h6>
                                                    <p class="msg-info">The standard chunk of lorem</p>
                                                </div>
                                            </div>
                                        </a>
                                        {{-- <a class="dropdown-item" href="javascript:;">
                                            <div class="d-flex align-items-center">
                                                <div class="user-online">
                                                    <img src="{{ url('assets/images/avatars/avatar-2.png', []) }}" class="msg-avatar"
                                                        alt="user avatar">
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="msg-name">Althea Cabardo <span
                                                            class="msg-time float-end">14
                                                            sec ago</span></h6>
                                                    <p class="msg-info">Many desktop publishing packages</p>
                                                </div>
                                            </div>
                                        </a> --}}
                                       
                                    </div>
                                    <a href="javascript:;">
                                        <div class="text-center msg-footer">View All Messages</div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="user-box dropdown">
                        <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                            href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="{{ url(auth::user()->gambar, []) }}" class="user-img" alt="user avatar">
                            <div class="user-info ps-3">
                                <p class="user-name mb-0">{{auth::user()->name}}</p>
                                <p class="designattion mb-0">{{auth::user()->email}}</p>
                            </div>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-endx">
                            <li><a class="dropdown-item" href="javascript:;"><i
                                        class="bx bx-user"></i><span>Profile</span></a>
                            </li>
                            <li><a class="dropdown-item" href="javascript:;"><i
                                        class="bx bx-key"></i><span>Ubah Password</span></a>
                            </li>
                           
                            <li>
                                <div class="dropdown-divider mb-0"></div>
                            </li>
                            <li><a class="dropdown-item" href="javascript:;" onclick="event.preventDefault();document.getElementById('logout-form').submit();"><i class='bx bx-log-out-circle'></i><span>Keluar</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        
        @yield('content')

        <!--end page wrapper -->
        <!--start overlay-->
        <div class="overlay toggle-icon"></div>
        <!--end overlay-->
        <!--Start Back To Top Button--> <a href="javaScript:;" class="back-to-top"><i
                class='bx bxs-up-arrow-alt'></i></a>
        <!--End Back To Top Button-->
        <footer class="page-footer">
            <p class="mb-0">Copyright © 2022. All right reserved V 1.0</p>
        </footer>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
            @csrf
        </form>
    </div>
    <!--end wrapper-->
    <!--start switcher-->
    <div class="switcher-wrapper">
        <div class="switcher-btn"> <i class='bx bx-cog bx-spin'></i>
        </div>
        <div class="switcher-body">
            <div class="d-flex align-items-center">
                <h5 class="mb-0 text-uppercase">Theme Customizer</h5>
                <button type="button" class="btn-close ms-auto close-switcher" aria-label="Close"></button>
            </div>
            <hr />
            <p class="mb-0">Gaussian Texture</p>
            <hr>

            <ul class="switcher">
                <li id="theme1"></li>
                <li id="theme2"></li>
                <li id="theme3"></li>
                <li id="theme4"></li>
                <li id="theme5"></li>
                <li id="theme6"></li>
            </ul>
            <hr>
            <p class="mb-0">Gradient Background</p>
            <hr>

            <ul class="switcher">
                <li id="theme7"></li>
                <li id="theme8"></li>
                <li id="theme9"></li>
                <li id="theme10"></li>
                <li id="theme11"></li>
                <li id="theme12"></li>
                <li id="theme13"></li>
                <li id="theme14"></li>
                <li id="theme15"></li>
            </ul>
        </div>
    </div>
    <!--end switcher-->
    <div class="compose-mail-popup">
        <div class="card">
            <div class="card-header bg-secondary bg-gradient text-white py-2 cursor-pointer">
                <div class="d-flex align-items-center">
                    <div class="compose-mail-title">Chat</div>
                    <div class="compose-mail-close ms-auto">x</div>
                </div>
            </div>
            
            <div class="chat-wrapper"  id="showchat">
                
                <!--start chat overlay-->
                {{-- <div class="overlay chat-toggle-btn-mobile"></div> --}}
                <!--end chat overlay-->
            </div>
            
        </div>
    </div>
    <!-- Bootstrap JS -->
    <script src="{{ url('assets/js/bootstrap.bundle.min.js', []) }}"></script>
    <!--plugins-->
    
    <script src="{{ url('assets/plugins/simplebar/js/simplebar.min.js', []) }}"></script>
    <script src="{{ url('assets/plugins/metismenu/js/metisMenu.min.js', []) }}"></script>
    <script src="{{ url('assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js', []) }}"></script>
    <script src="{{ url('assets/plugins/select2/js/select2.min.js', []) }}"></script>
    <script src="{{ url('assets/plugins/datatable/js/jquery.dataTables.min.js', []) }}"></script>
	<script src="{{ url('assets/plugins/datatable/js/dataTables.bootstrap5.min.js', []) }}"></script>
    <!--app JS-->
    <script src="{{ url('assets/js/app.js', []) }}"></script>
    
    
    <script src="{{ url('js/user.js', []) }}"></script>
    <script src="{{ url('js/chat.js', []) }}"></script>
    @if (auth::user()->akses == 1)
    <script src="{{ url('js/master.js', []) }}"></script>   
    <script>
		$(document).ready(function() {
			$('#example').DataTable();
		  } );
	</script> 
    @else
        
    @endif
    {{-- <script>
		new PerfectScrollbar('.chat-list');
		new PerfectScrollbar('.chat-content');
	</script> --}}
</body>

</html>

