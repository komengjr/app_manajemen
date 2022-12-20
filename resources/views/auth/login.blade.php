<!doctype html>
<html lang="en">

<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--favicon-->
	<link rel="icon" href="{{ url('logo-icon.png', []) }}" type="image/png" />
	<!--plugins-->
	<link href="assets/plugins/simplebar/css/simplebar.css" rel="stylesheet" />
	<link href="assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet" />
	<link href="assets/plugins/metismenu/css/metisMenu.min.css" rel="stylesheet" />
	<!-- loader-->
	<link href="assets/css/pace.min.css" rel="stylesheet" />
	<script src="assets/js/pace.min.js"></script>
	<!-- Bootstrap CSS -->
	<link href="assets/css/bootstrap.min.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
	<link href="assets/css/app.css" rel="stylesheet">
	<link href="assets/css/icons.css" rel="stylesheet">
	<title>Panel Login - V 1.0</title>
</head>

<body class="bg-theme bg-theme2">
	<!--wrapper-->
	<div class="wrapper">
		<header class="login-header shadow">
			<nav class="navbar navbar-expand-lg navbar-light bg-dark rounded fixed-top rounded-0 shadow-sm">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						<img src="logo-icon.png" width="30" alt="" />
					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent1">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							{{-- <li class="nav-item"> <a class="nav-link text-white" aria-current="page" href="#"><i class='bx bx-home-alt me-1'></i>Home</a>
							</li> --}}
							<li class="nav-item"> <a class="nav-link text-white" href="#"><i class='bx bx-user me-1'></i>About</a>
							</li>
							<li class="nav-item"> <a class="nav-link text-white" href="#"><i class='bx bx-category-alt me-1'></i>Features</a>
							</li>
							<li class="nav-item"> <a class="nav-link text-white" href="#"><i class='bx bx-microphone me-1'></i>Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
		<div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-4">
			<div class="container-fluid">
				<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
					<div class="col mx-auto">
						<div class="card mt-5 mt-lg-0">
							<div class="card-body">
								<div class="border p-4 rounded">
									<div class="">
                                        
										<h3 class="text-center">
                                            <img src="gif.gif" alt="" srcset="">
                                        </h3>
										
									<div class="login-separater text-center mb-4"> <span>Aplication V 1.0</span>
										<hr/>
									</div>
									<div class="form-body">
										<form class="row g-3" method="POST" action="{{ route('login') }}">
                                            @csrf
											<div class="col-12">
												<label for="inputEmailAddress" class="form-label">Username</label>
												<input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="username">
                                                @error('email')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
											<div class="col-12">
												<label for="inputChoosePassword" class="form-label">Enter Password</label>
												<div class="input-group" id="show_hide_password">
													<input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="masukan Password"> <a href="javascript:;" class="input-group-text"><i class='bx bx-hide'></i></a>
                                                    @error('password')
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                                                    @enderror
												</div>
											</div>
											<div class="col-md-6">
												{{-- <div class="form-check form-switch">
													<input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
													<label class="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
												</div> --}}
											</div>
											<div class="col-md-6 text-end">	<a href="authentication-forgot-password.html">Forgot Password ?</a>
											</div>
											<div class="col-12">
												<div class="d-grid">
													<button type="submit" class="btn btn-light"><i class="bx bxs-lock-open"></i>Masuk</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--end row-->
			</div>
		</div>
		<footer class="bg-dark shadow-sm p-2 text-center fixed-bottom">
			<p class="mb-0 text-white">Copyright © 2021. All right reserved.</p>
		</footer>
	</div>
	<!--end wrapper-->
	<!--start switcher-->
	
	<!--end switcher-->
	<!-- Bootstrap JS -->
	<script src="assets/js/bootstrap.bundle.min.js"></script>
	<!--plugins-->
<script src="assets/js/jquery.min.js"></script>

<script>
	$(".switcher-btn").on("click", function() {
	$(".switcher-wrapper").toggleClass("switcher-toggled")
	}), $(".close-switcher").on("click", function() {
		$(".switcher-wrapper").removeClass("switcher-toggled")
	}),


	$('#theme1').click(theme1);
	$('#theme2').click(theme2);
	$('#theme3').click(theme3);
	$('#theme4').click(theme4);
	$('#theme5').click(theme5);
	$('#theme6').click(theme6);
	$('#theme7').click(theme7);
	$('#theme8').click(theme8);
	$('#theme9').click(theme9);
	$('#theme10').click(theme10);
	$('#theme11').click(theme11);
	$('#theme12').click(theme12);
	$('#theme13').click(theme13);
	$('#theme14').click(theme14);
	$('#theme15').click(theme15);


	function theme1() {
	  $('body').attr('class', 'bg-theme bg-theme1');
	}

	function theme2() {
	  $('body').attr('class', 'bg-theme bg-theme2');
	}

	function theme3() {
	  $('body').attr('class', 'bg-theme bg-theme3');
	}

	function theme4() {
	  $('body').attr('class', 'bg-theme bg-theme4');
	}

	function theme5() {
	  $('body').attr('class', 'bg-theme bg-theme5');
	}

	function theme6() {
	  $('body').attr('class', 'bg-theme bg-theme6');
	}

	function theme7() {
	  $('body').attr('class', 'bg-theme bg-theme7');
	}

	function theme8() {
	  $('body').attr('class', 'bg-theme bg-theme8');
	}

	function theme9() {
	  $('body').attr('class', 'bg-theme bg-theme9');
	}

	function theme10() {
	  $('body').attr('class', 'bg-theme bg-theme10');
	}

	function theme11() {
	  $('body').attr('class', 'bg-theme bg-theme11');
	}

	function theme12() {
	  $('body').attr('class', 'bg-theme bg-theme12');
	}

	function theme13() {
	  $('body').attr('class', 'bg-theme bg-theme13');
	}

	function theme14() {
	  $('body').attr('class', 'bg-theme bg-theme14');
	}

	function theme15() {
	  $('body').attr('class', 'bg-theme bg-theme15');
	}
	</script>
</body>

</html>