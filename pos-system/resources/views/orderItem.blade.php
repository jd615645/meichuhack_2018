@extends('layouts.view')
@section('style')
@endsection

@section('content')
<order-item :order="{{ $order }}"></order-item>
@endsection

@section('script')
@endsection