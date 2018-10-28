<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  @include('includes.header')
  @yield('style')
</head>
<body>
    <div id="app">
        @yield('item')
    </div>
  @include('includes.footer')
  @yield('script')
</body>
</html>
