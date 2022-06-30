#import "Unicorn.h"

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNUnicornSpec.h"
#endif

@implementation Unicorn
RCT_EXPORT_MODULE()

// Example method
// See // https://reactnative.dev/docs/native-modules-ios
RCT_REMAP_METHOD(multiply,
                 multiplyWithA:(nonnull NSNumber*)a withB:(nonnull NSNumber*)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
  NSNumber *result = @([a floatValue] * [b floatValue]);

  resolve(result);
}

RCT_REMAP_BLOCKING_SYNCHRONOUS_METHOD(add,
                                      NSNumber *,
                                      addWithA:(double)a  withB:(double)b)
{
    return [NSNumber numberWithDouble:(a + b)];
}

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeUnicornSpecJSI>(params);
}
#endif

@end
