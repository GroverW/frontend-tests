<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>@yield('title')</title>

  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="bg-black">
  <div class="container">
    <nav class="relative md:fixed flex justify-center items-center w-screen bg-gray-800  h-20 md:h-32">
      <ul class="hidden md:flex flex-row">
        <li><a class="block {{ Request::path() == '/' ? 'text-red-600' : 'text-gray-500 hover:text-gray-300 hover:bg-gray-900' }} uppercase w-24 text-center leading-4 p-2 rounded" href="">Home</a></li>
        <li><a class="block {{ Request::path() == 'menu' ? 'text-red-600' : 'text-gray-500 hover:text-gray-300 hover:bg-gray-900' }} uppercase w-24 text-center leading-4 p-2 rounded mr-48" href="">Menu</a></li>
        <li><a class="block {{ Request::path() == 'about' ? 'text-red-600' : 'text-gray-500 hover:text-gray-300 hover:bg-gray-900' }} uppercase w-24 text-center leading-4 p-2 rounded" href="">About</a></li>
        <li><a class="block {{ Request::path() == 'contact' ? 'text-red-600' : 'text-gray-500 hover:text-gray-300 hover:bg-gray-900' }} uppercase w-24 text-center leading-4 p-2 rounded" href="">Contact</a></li>
      </ul>
    </nav>
  </div>
</body>
</html>