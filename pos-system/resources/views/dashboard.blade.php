@extends('layouts.view')

@section('style')
@endsection

@section('content')
<dash-board :orders="{{ $list }}"></dash-board>
@endsection

@section('script')
@endsection
