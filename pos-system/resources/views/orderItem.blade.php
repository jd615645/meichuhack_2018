@extends('layouts.item')
@section('style')
@endsection

@section('item')
<order-item :order="{{ $order }}"></order-item>
@endsection

@section('script')
@endsection